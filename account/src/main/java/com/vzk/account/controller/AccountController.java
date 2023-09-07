package com.vzk.account.controller;

import org.openapitools.api.AccountApi;
import org.openapitools.model.AccountDTO;
import org.openapitools.model.CreateAccountDTO;
import org.openapitools.model.UpdateAccountDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AccountController implements AccountApi {
    @Override
    public ResponseEntity<AccountDTO> createAccount(CreateAccountDTO createAccountDTO) {
        return null;
    }

    @Override
    public ResponseEntity<Void> deleteAccount(Integer account) {
        return null;
    }

    @Override
    public ResponseEntity<AccountDTO> getAccountByEmail(String account) {
        return null;
    }

    @Override
    public ResponseEntity<AccountDTO> getAccountById(Integer account) {
        return null;
    }

    @Override
    public ResponseEntity<List<AccountDTO>> getAllAccounts() {
        return null;
    }

    @Override
    public ResponseEntity<List<AccountDTO>> getAllActiveAccounts() {
        return null;
    }

    @Override
    public ResponseEntity<Void> updateAccount(UpdateAccountDTO updateAccountDTO) {
        return null;
    }
}
