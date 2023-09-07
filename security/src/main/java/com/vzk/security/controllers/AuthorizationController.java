package com.vzk.security.controllers;

import org.openapitools.api.AuthorizationApi;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthorizationController implements AuthorizationApi {
    @Override
    public ResponseEntity<String> authorize(String destination) {
        return null;
    }
}
