package com.vzk.security.controllers;

import lombok.RequiredArgsConstructor;
import org.openapitools.api.AuthorizationApi;
import org.openapitools.model.JwtAuthorizationResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthorizationController implements AuthorizationApi {

    @Override
    public ResponseEntity<JwtAuthorizationResponse> validateToken(String token) {
        return ResponseEntity.ok(new JwtAuthorizationResponse(true));
    }
}
