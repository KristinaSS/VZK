package com.vzk.security.services.impl;

import com.vzk.security.feign.AccountClient;
import com.vzk.security.feign.RolesClient;
import com.vzk.security.models.Account;
import com.vzk.security.services.AuthService;
import com.vzk.security.services.JwtGeneratorInterface;
import com.vzk.security.services.UserService;
import feign.FeignException;
import io.jsonwebtoken.ExpiredJwtException;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.openapitools.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.access.AuthorizationServiceException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static com.vzk.security.utils.Constants.DEFAULT_USER_ROLE_UUID;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtGeneratorInterface jwtService;

    @Autowired
    private AccountClient accountClient;

    @Autowired
    private RolesClient rolesClient;

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private UserService userService;

    @Value("${spring.mail.username}")
    private String senderEmail;

    @Override
    public void signUp(CreateAccountDTO request) {
        String encodedPassword = passwordEncoder.encode(request.getPassword());
        request.setPassword(encodedPassword);
        AccountDTO acc = accountClient.createAccount(request).getBody();

        assert acc != null;
        Account user = getSecurityAccount(acc, true);

        String jwt = jwtService.generateToken(user);
        sendVerificationEmail(acc.getEmail(), jwt);
    }

    @Override
    public JwtAuthenticationResponse signIn(CredentialsDTO request) {
        AccountDTO acc;

        try {
            acc = accountClient.getAccountByEmail(request.getEmail(), request.getEmail()).getBody();
        } catch (FeignException.FeignClientException e) {
            throw new AuthorizationServiceException("Access Denied for user");
        }

        if (!passwordEncoder.matches(request.getPassword(), acc.getPassword()) || !acc.getIsActive()) {
            throw new AuthorizationServiceException("Access Denied for user");
        }
        Account user = getSecurityAccount(acc, false);

        String jwt = jwtService.generateToken(user);

        return JwtAuthenticationResponse.builder().token(jwt).username(acc.getUsername()).build();
    }

    @Override
    public VerificationResponse verify(String token, String email) {
        VerificationResponse status = VerificationResponse.builder().status("error").build();

        try {
            if (StringUtils.isNotEmpty(email)) {
                UserDetails userDetails = userService.userDetailsService().loadUserByUsername(email);
                status.setStatus(jwtService.isTokenValid(token, userDetails) ? "verified" : "expired");
            }
        } catch (ExpiredJwtException exception) {
            status.setStatus("expired");
        }

        modifyUser(status.getStatus(), email);

        return status;
    }

    private void modifyUser(String status, String userEmail) {
        if (status.equals("verified") && userEmail != null) {
            // Update and set isActive to true
            // Example: userService.activateUser(userEmail);
            System.out.println("updated");
        } else if (status.equals("expired") && userEmail != null) {
            // Delete account
            // Example: userService.deleteUser(userEmail);
            System.out.println("deleted");
        }
    }

    private Account getSecurityAccount(AccountDTO acc, boolean isNew) {
        if (isNew) {
            rolesClient.giveAccountRole(acc.getId(), DEFAULT_USER_ROLE_UUID, acc.getId(), DEFAULT_USER_ROLE_UUID);
        }

        List<RoleDTO> roles = rolesClient.getRolesByAccountId(acc.getId(), acc.getId());
        Set<String> permissions = new HashSet<>();

        roles.forEach(role ->
                rolesClient.getPermissionsByRoleId(role.getId().toString(), role.getId().toString())
                        .forEach(permission -> permissions.add(permission.getName())));

        return Account.builder().accountDTO(acc).permissions(permissions).build();
    }

    private void sendVerificationEmail(String to, String token) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject("Account Verification");
        message.setText("Click the following link to verify your account: "
                + "http://localhost:4200/verify/"+ to +"/" + token);
        message.setFrom(senderEmail);

        mailSender.send(message);
    }
}

