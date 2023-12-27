package com.vzk.security.controllers;

import com.vzk.security.services.AuthService;
import org.openapitools.api.AuthenticationApi;
import org.openapitools.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController implements AuthenticationApi {


    @Autowired
    private AuthService authService;

    @Override
    public ResponseEntity<RoleResponse> getRole(VerificationToken verificationToken) {
        return ResponseEntity.ok(authService.getRole(verificationToken.getvToken()));
    }

    @Override
    public ResponseEntity<JwtAuthenticationResponse> login(CredentialsDTO credentialsDTO) {
        return ResponseEntity.ok(authService.signIn(credentialsDTO));
    }

    @Override
    public ResponseEntity<Void> resend(VerificationToken verificationToken) {
        authService.resend(verificationToken.getEmail());
        return ResponseEntity.ok(null);
    }

    @Override
    public ResponseEntity<Void> signUp(CreateAccountDTO createAccountDTO) {
        authService.signUp(createAccountDTO);
        return ResponseEntity.ok(null);
    }

    @Override
    public ResponseEntity<VerificationResponse> verify(VerificationToken verificationToken) {
        return ResponseEntity.ok(authService.verify(verificationToken.getvToken(), verificationToken.getEmail()));
    }
}
