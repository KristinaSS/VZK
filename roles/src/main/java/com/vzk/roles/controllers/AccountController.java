package com.vzk.roles.controllers;

import com.vzk.roles.services.AccountService;
import org.openapitools.api.AccountApi;
import org.openapitools.model.RoleDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
public class AccountController implements AccountApi {

    @Autowired
    private AccountService accountService;

    @Override  //works
    public ResponseEntity<Void> deleteAccountRole(UUID accId, UUID roleId) {
        accountService.deleteAccountRole(accId, roleId);
        return ResponseEntity.ok(null);
    }

    @Override //works
    public ResponseEntity<List<RoleDTO>> getRolesByAccountId(UUID accountId) {
        return ResponseEntity.ok(accountService.getRolesForAccount(accountId));
    }

    @Override //works
    public ResponseEntity<Void> giveAccountRole(UUID accountId, UUID roleId) {
        accountService.giveRoleToAccount(accountId, roleId);
        return ResponseEntity.ok(null);
    }
}
