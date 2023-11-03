package com.vzk.account.controller;

import com.vzk.account.services.AccountService;
import org.openapitools.api.AccountApi;
import org.openapitools.model.AccountDTO;
import org.openapitools.model.CreateAccountDTO;
import org.openapitools.model.UpdateAccountDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
public class AccountController implements AccountApi {
    @Autowired
    private AccountService accountService;

    @Override //works
    public ResponseEntity<AccountDTO> createAccount(CreateAccountDTO createAccountDTO) {
        return ResponseEntity.ok(accountService.createAccount(createAccountDTO));
    }

    @Override
    public ResponseEntity<Void> deleteAccount(UUID account) {
        accountService.deleteAccount(account.toString());
        return ResponseEntity.ok(null);
    }

    @Override //works
    public ResponseEntity<AccountDTO> getAccountByEmail(String account) {
        return ResponseEntity.ok(accountService.getAccountByEmail(account));
    }

    @Override //works
    public ResponseEntity<AccountDTO> getAccountById(UUID account) {
        return ResponseEntity.ok(accountService.getAccountById(account.toString()));
    }

    @Override //works
    public ResponseEntity<List<AccountDTO>> getAllAccounts() {
        return ResponseEntity.ok(accountService.getAllAccounts());
    }

    @Override //works
    public ResponseEntity<List<AccountDTO>> getAllActiveAccounts() {
        return ResponseEntity.ok(accountService.getAllActiveAccounts());
    }

    @Override
    public ResponseEntity<Void> updateAccount(UpdateAccountDTO updateAccountDTO) {
        accountService.updateAccount(updateAccountDTO);
        return ResponseEntity.ok(null);
    }
}
