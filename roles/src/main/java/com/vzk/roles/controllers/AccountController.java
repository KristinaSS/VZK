package com.vzk.roles.controllers;

import com.vzk.roles.services.AccountService;
import org.openapitools.api.AccountApi;
import org.openapitools.model.RoleDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AccountController implements AccountApi {

    @Autowired
    private AccountService accountService;

    @Override
    public ResponseEntity<Void> deleteAccountRole(Integer accountId, Integer roleId) {
        accountService.deleteAccountRole(accountId, roleId);
        return ResponseEntity.ok(null);
    }

    @Override
    public ResponseEntity<List<RoleDTO>> getRolesByAccountId(Integer accountId) {
        return ResponseEntity.ok(accountService.getRolesForAccount(accountId));
    }

    @Override
    public ResponseEntity<Void> giveAccountRole(Integer accountId, Integer roleId) {
        accountService.giveRoleToAccount(accountId, roleId);
        return ResponseEntity.ok(null);
    }
}
