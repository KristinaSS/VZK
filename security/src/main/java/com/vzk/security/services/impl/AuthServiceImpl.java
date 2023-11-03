package com.vzk.security.services.impl;

import com.vzk.security.feign.AccountClient;
import com.vzk.security.services.AuthService;
import org.openapitools.model.AccountDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private AccountClient accountClient;

    @Override
    public String authenticate(String email, String password) {
        AccountDTO responseEntity = accountClient.getAccountByEmail(email, email);

        if (responseEntity != null) {
            // Process the account information
            return "Authentication successful "  + responseEntity.getUsername();
        } else {
            // Handle the case where the response is null
            return "Account not found";
        }
    }
}

