package com.vzk.security.controllers;

import org.openapitools.api.AuthorizationApi;
import org.openapitools.model.JwtAuthorizationRequest;
import org.openapitools.model.JwtAuthorizationResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthorizationController implements AuthorizationApi {


    @Override
    public ResponseEntity<JwtAuthorizationResponse> authorize(String authorization, JwtAuthorizationRequest jwtAuthorizationRequest) {
        return ResponseEntity.ok(new JwtAuthorizationResponse(true));
    }

    @Override
    public ResponseEntity<JwtAuthorizationResponse> validateToken(String token) {
        return ResponseEntity.ok(new JwtAuthorizationResponse(true));
    }
}
