package com.vzk.security.services;

public interface AuthService {
    String authenticate(String email, String password);
}
