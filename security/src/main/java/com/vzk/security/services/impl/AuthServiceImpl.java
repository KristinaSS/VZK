package com.vzk.security.services.impl;

import com.vzk.security.feign.AccountClient;
import com.vzk.security.feign.RolesClient;
import com.vzk.security.services.AuthService;
import org.openapitools.model.AccountDTO;
import org.openapitools.model.PermissionDTO;
import org.openapitools.model.RoleDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private AccountClient accountClient;

    @Autowired
    private RolesClient rolesClient;

    @Override
    public String authenticate(String email, String password) {
        AccountDTO account = accountClient.getAccountByEmail(email, email);

        if (account != null) {
            // Process the account information

            RoleDTO role = rolesClient.getRolesByAccountId(account.getId().toString(), account.getId().toString()).get(0);
            List<PermissionDTO> permissionDTOList = rolesClient.getPermissionsByRoleId(role.getId().toString(), role.getId().toString());
            return "Authentication successful "  + account.getUsername();
        } else {
            // Handle the case where the response is null
            return "Account not found";
        }
    }
}

