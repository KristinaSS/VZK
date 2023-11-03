package com.vzk.security.services;

import org.openapitools.model.CreateAccountDTO;

public interface AuthService {
    String authenticate(String email, String password);

    void signUpUser(CreateAccountDTO createAccountDTO);
}
