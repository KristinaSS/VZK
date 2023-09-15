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

@RestController
public class AccountController implements AccountApi {
    @Autowired
    private AccountService accountService;

    @Override
    public ResponseEntity<AccountDTO> createAccount(CreateAccountDTO createAccountDTO) {
        return ResponseEntity.ok(accountService.createAccount(createAccountDTO));
    }

    @Override
    public ResponseEntity<Void> deleteAccount(String account) {
        accountService.deleteAccount(account);
        return ResponseEntity.ok(null);
    }

    @Override
    public ResponseEntity<AccountDTO> getAccountByEmail(String account) {
        return ResponseEntity.ok(accountService.getAccountByEmail(account));
    }

    @Override
    public ResponseEntity<AccountDTO> getAccountById(String account) {
        return ResponseEntity.ok(accountService.getAccountById(account));
    }

    @Override
    public ResponseEntity<List<AccountDTO>> getAllAccounts() {
        return ResponseEntity.ok(accountService.getAllAccounts());
    }

    @Override
    public ResponseEntity<List<AccountDTO>> getAllActiveAccounts() {
        return ResponseEntity.ok(accountService.getAllActiveAccounts());
    }

    @Override
    public ResponseEntity<Void> updateAccount(UpdateAccountDTO updateAccountDTO) {
        accountService.updateAccount(updateAccountDTO);
        return ResponseEntity.ok(null);
    }
}
