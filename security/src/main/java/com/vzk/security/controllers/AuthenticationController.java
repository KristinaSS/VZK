package com.vzk.security.controllers;

import org.openapitools.api.AuthenticationApi;
import org.openapitools.model.UserInfoDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController implements AuthenticationApi {
    @Override
    public ResponseEntity<UserInfoDTO> getUserInfo() {
        return null;
    }

    @Override
    public ResponseEntity<Void> login() {
        return null;
    }

    @Override
    public ResponseEntity<Void> logout() {
        return null;
    }
}
