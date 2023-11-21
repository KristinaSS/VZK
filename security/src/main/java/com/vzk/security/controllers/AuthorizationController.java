package com.vzk.security.controllers;

import com.vzk.security.services.AuthorizationService;
import org.openapitools.api.AuthorizationApi;
import org.openapitools.model.JwtAuthorizationRequest;
import org.openapitools.model.JwtAuthorizationResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthorizationController implements AuthorizationApi {

    @Autowired
    private AuthorizationService authorizationService;

    @Override
    public ResponseEntity<JwtAuthorizationResponse> authorize(String authorization, JwtAuthorizationRequest jwtAuthorizationRequest) {
        return ResponseEntity.ok(authorizationService.authorize(authorization, jwtAuthorizationRequest));
    }

    @Override
    public ResponseEntity<JwtAuthorizationResponse> validateToken(String token) {
        return ResponseEntity.ok(authorizationService.validateToken(token));
    }
}
