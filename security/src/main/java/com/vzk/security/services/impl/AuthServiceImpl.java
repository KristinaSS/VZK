package com.vzk.security.services.impl;

import com.vzk.security.services.AuthService;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {
    @Override
    public String authenticate(String email, String password) {
        return null;
    }
}
