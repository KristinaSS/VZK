package com.vzk.security.controllers;

import com.vzk.security.services.AuthService;
import org.openapitools.api.AuthenticationApi;
import org.openapitools.model.AuthLoginPost200Response;
import org.openapitools.model.CredentialsDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController implements AuthenticationApi {


    @Autowired
    private AuthService authService;

    @Override
    public ResponseEntity<AuthLoginPost200Response> authLoginPost(CredentialsDTO credentialsDTO) {
        String accessToken = authService.authenticate(credentialsDTO.getEmail(), credentialsDTO.getPassword());
        return ResponseEntity.ok(new AuthLoginPost200Response(accessToken));
    }
}
