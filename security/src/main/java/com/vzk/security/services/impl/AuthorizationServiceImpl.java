package com.vzk.security.services.impl;

import com.vzk.security.feign.AccountClient;
import com.vzk.security.models.Account;
import com.vzk.security.services.AuthorizationService;
import com.vzk.security.services.JwtGeneratorInterface;
import com.vzk.security.services.UserService;
import io.jsonwebtoken.JwtException;
import org.apache.commons.lang3.StringUtils;
import org.openapitools.model.AccountDTO;
import org.openapitools.model.JwtAuthorizationRequest;
import org.openapitools.model.JwtAuthorizationResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import static com.vzk.security.utils.RequestPaths.*;

@Service
public class AuthorizationServiceImpl implements AuthorizationService {
    @Autowired
    private JwtGeneratorInterface jwtService;

    @Autowired
    private UserService userService;

    @Autowired
    private AccountClient accountClient;

    @Override
    public JwtAuthorizationResponse authorize(String authorization, JwtAuthorizationRequest jwtAuthorizationRequest) {
        final String jwt = getJwt(authorization);

        if (checkIfAnonymous(jwt, jwtAuthorizationRequest.getPath())) {
            return new JwtAuthorizationResponse(true);
        } else if (jwt.equals("anonymous")) {
            return new JwtAuthorizationResponse(false);
        }

        final String userEmail = jwtService.extractUserName(jwt);
        final Account authAcc = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (authAcc.getUsername().equals(userEmail) && StringUtils.isNotEmpty(userEmail)) {
            UserDetails userDetails = userService.userDetailsService().loadUserByUsername(userEmail);
            if (hasPermissionForProfilePath(jwtAuthorizationRequest, userDetails)
                    || hasPermissionForPlayerPath(jwtAuthorizationRequest, userDetails)
                    || hasPermission(userDetails, jwtAuthorizationRequest.getPath())) {
                return new JwtAuthorizationResponse(true);
            }
        }

        return new JwtAuthorizationResponse(false);
    }

    @Override
    public JwtAuthorizationResponse validateToken(String token) {
        final String jwt = getJwt(token);
        final String userEmail = jwtService.extractUserName(jwt);
        final Account authAcc = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (authAcc.getUsername().equals(userEmail) && StringUtils.isNotEmpty(userEmail)) {
            UserDetails userDetails = userService
                    .userDetailsService().loadUserByUsername(userEmail);

            if (jwtService.isTokenValid(jwt, userDetails)) {
                return new JwtAuthorizationResponse(true);
            }
        }

        return new JwtAuthorizationResponse(false);
    }

    private boolean hasPermission(UserDetails userDetails, String path) {
        List<String> userPermissions = getPermissions(userDetails);

        List<String> requiredPermissions = PATHS_PERMISSIONS_MAP.getOrDefault(path, Collections.emptyList());

        // Check if the user has at least one of the required permissions
        return userPermissions.stream().anyMatch(requiredPermissions::contains);
    }

    private List<String> getPermissions(UserDetails userDetails) {
        return userDetails.getAuthorities()
                .stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());
    }

    private String getJwt(String token) {
        if (StringUtils.isEmpty(token) || !StringUtils.startsWith(token, "Bearer ")) {
            throw new JwtException("Provided token is invalid");
        }

        return token.substring(7);
    }

    private boolean checkIfAnonymous(String jwt, String path) {
        if ("anonymous".equals(jwt)) {
            // User is anonymous
            String permission = getAnonymousPermission(path);
            return permission != null && permission.equals(GUEST_PERMISSIONS);
        }
        return false;
    }

    private String getAnonymousPermission(String path) {
        List<String> requiredPermissions = PATHS_PERMISSIONS_MAP.getOrDefault(path, Collections.emptyList());
        return requiredPermissions.isEmpty() ? null : requiredPermissions.get(0);
    }

    private boolean hasPermissionForProfilePath(JwtAuthorizationRequest request, UserDetails userDetails) {
        if (!VIEW_PROFILE_PATHS_LIST.contains(request.getPath())) {
            return false;
        }

        List<String> userPermissions = getPermissions(userDetails);

        if (request.getEmail() != null && request.getEmail().equals(userDetails.getUsername())) {
            return true;
        }

        if (request.getId() != null) {
            AccountDTO account = accountClient.getAccountByEmail(userDetails.getUsername(), userDetails.getUsername()).getBody();
            if (account != null && request.getId().equals(account.getId().toString())) {
                return true;
            }
        }

        return userPermissions.contains(ADMIN_VIEW_PROFILES);
    }

    private boolean hasPermissionForPlayerPath(JwtAuthorizationRequest request, UserDetails userDetails) {
        if (!VIEW_PLAYER_PATHS_LIST.contains(request.getPath())) {
            return false;
        }

        List<String> userPermissions = getPermissions(userDetails);

        if (request.getEmail() != null && request.getEmail().equals(userDetails.getUsername())) {
            return true;
        }

        if (request.getId() != null) {
            AccountDTO account = accountClient.getAccountByEmail(userDetails.getUsername(), userDetails.getUsername()).getBody();
            if (account != null && userPermissions.contains(USER_VIEW_PLAYER) && request.getId().equals(account.getId().toString())) {
                return true;
            }
        }

        return userPermissions.contains(NON_USER_VIEW_PLAYER);
    }
}
