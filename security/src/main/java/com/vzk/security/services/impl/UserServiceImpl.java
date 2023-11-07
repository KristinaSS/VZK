package com.vzk.security.services.impl;

import com.vzk.security.feign.AccountClient;
import com.vzk.security.feign.RolesClient;
import com.vzk.security.models.Account;
import com.vzk.security.services.UserService;
import feign.FeignException;
import lombok.RequiredArgsConstructor;
import org.openapitools.model.AccountDTO;
import org.openapitools.model.RoleDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static com.vzk.security.utils.Constants.DEFAULT_USER_ROLE_UUID;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    @Autowired
    private final AccountClient accountClient;

    @Autowired
    private final RolesClient rolesClient;

    @Override
    public UserDetailsService userDetailsService() {
        return username -> {
            AccountDTO accountDTO = accountClient.getAccountByEmail(username, username).getBody();
            assert accountDTO != null;
            try {
                return getSecurityAccount(accountDTO);
            } catch (FeignException.FeignClientException e) {
                throw new UsernameNotFoundException("User not found");
            }

        };
    }

    private Account getSecurityAccount(AccountDTO acc) {
        List<RoleDTO> roles = rolesClient.getRolesByAccountId(acc.getId(), acc.getId());
        Set<String> permissions = new HashSet<>();

        roles.forEach(role ->
                rolesClient.getPermissionsByRoleId(role.getId().toString(), role.getId().toString())
                        .forEach(permission -> permissions.add(permission.getName())));

        return Account.builder().accountDTO(acc).permissions(permissions).build();
    }
}
