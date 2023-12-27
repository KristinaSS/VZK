package com.vzk.security.services;

import org.openapitools.model.*;

public interface AuthService {
    void signUp(CreateAccountDTO request);

    JwtAuthenticationResponse signIn(CredentialsDTO request);

    VerificationResponse verify(String token, String email);

    void resend(String email);

    RoleResponse getRole(String s);
}
