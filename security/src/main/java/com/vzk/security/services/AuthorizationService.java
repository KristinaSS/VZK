package com.vzk.security.services;

import org.openapitools.model.JwtAuthorizationRequest;
import org.openapitools.model.JwtAuthorizationResponse;

public interface AuthorizationService {
    JwtAuthorizationResponse authorize(String authorization, JwtAuthorizationRequest jwtAuthorizationRequest);

    JwtAuthorizationResponse validateToken(String token);
}
