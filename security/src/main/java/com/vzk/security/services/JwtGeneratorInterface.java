package com.vzk.security.services;

import org.springframework.security.core.userdetails.UserDetails;

public interface JwtGeneratorInterface {
    String extractUserName(String token);

    String generateToken(UserDetails userDetails);

    boolean isTokenValid(String token, UserDetails userDetails);
}
