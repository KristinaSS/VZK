package com.vzk.security.services.impl;

import com.vzk.security.feign.AccountClient;
import com.vzk.security.feign.RolesClient;
import com.vzk.security.services.AuthService;
import org.openapitools.model.AccountDTO;
import org.openapitools.model.CreateAccountDTO;
import org.openapitools.model.PermissionDTO;
import org.openapitools.model.RoleDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class AuthServiceImpl implements AuthService {

    private static final UUID USER_ROLE_UUID = UUID.fromString("ca182baf-017d-4c4f-9769-1d82fac073d8");

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

    @Override
    public void signUpUser(CreateAccountDTO createAccountDTO) {
        AccountDTO createdAccount = accountClient.createAccount(createAccountDTO);
        rolesClient.giveAccountRole(createdAccount.getId(), USER_ROLE_UUID,createdAccount.getId(), USER_ROLE_UUID);
    }
}

