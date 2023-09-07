package com.vzk.security.controllers;

import org.openapitools.api.TokenApi;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TokenController implements TokenApi {
    @Override
    public ResponseEntity<String> access() {
        return null;
    }

    @Override
    public ResponseEntity<String> accessId() {
        return null;
    }

    @Override
    public ResponseEntity<String> payload() {
        return null;
    }
}
