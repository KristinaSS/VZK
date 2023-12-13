package com.vzk.security.services;

import org.openapitools.model.CreateAccountDTO;
import org.openapitools.model.CredentialsDTO;
import org.openapitools.model.JwtAuthenticationResponse;
import org.openapitools.model.VerificationResponse;

public interface AuthService {
    void signUp(CreateAccountDTO request);

    JwtAuthenticationResponse signIn(CredentialsDTO request);

    VerificationResponse verify(String token, String email);
}
