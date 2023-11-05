package com.vzk.security.services;

import org.openapitools.model.CreateAccountDTO;
import org.openapitools.model.CredentialsDTO;
import org.openapitools.model.JwtAuthenticationResponse;

public interface AuthService {
    JwtAuthenticationResponse signUp(CreateAccountDTO request);

    JwtAuthenticationResponse signIn(CredentialsDTO request);
}
