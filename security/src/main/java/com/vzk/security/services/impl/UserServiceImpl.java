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
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

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
        return Account.builder().accountDTO(acc).roles(roles).build();
    }
}
