package com.vzk.security.services.impl;

import com.vzk.security.models.Account;
import com.vzk.security.services.AuthorizationService;
import com.vzk.security.services.JwtGeneratorInterface;
import com.vzk.security.services.UserService;
import io.jsonwebtoken.JwtException;
import org.apache.commons.lang3.StringUtils;
import org.openapitools.model.JwtAuthorizationRequest;
import org.openapitools.model.JwtAuthorizationResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import static com.vzk.security.utils.RequestPaths.PATHS_PERMISSIONS_MAP;

@Service
public class AuthorizationServiceImpl implements AuthorizationService {
    @Autowired
    private JwtGeneratorInterface jwtService;

    @Autowired
    private UserService userService;

    @Override
    public JwtAuthorizationResponse authorize(String authorization, JwtAuthorizationRequest jwtAuthorizationRequest) {
        final String jwt = getJwt(authorization);
        final String userEmail = jwtService.extractUserName(jwt);
        final Account authAcc = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (StringUtils.isNotEmpty(userEmail) && authAcc.getUsername().equals(userEmail)) {
            UserDetails userDetails = userService.userDetailsService().loadUserByUsername(userEmail);
            final List<String> permissions = getPermissions(userDetails);

            if (permissions.contains(PATHS_PERMISSIONS_MAP.get(jwtAuthorizationRequest.getPath()))) {
                return new JwtAuthorizationResponse(true);
            }
        }

        return new JwtAuthorizationResponse(false);
    }

    @Override
    public JwtAuthorizationResponse validateToken(String token) {
        final String jwt = getJwt(token);
        final String userEmail = jwtService.extractUserName(jwt);
        final Account authAcc = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (StringUtils.isNotEmpty(userEmail) && authAcc.getUsername().equals(userEmail)) {
            UserDetails userDetails = userService
                    .userDetailsService().loadUserByUsername(userEmail);

            if (jwtService.isTokenValid(jwt, userDetails)) {
                return new JwtAuthorizationResponse(true);
            }
        }

        return new JwtAuthorizationResponse(false);
    }

    private List<String> getPermissions(UserDetails userDetails) {
        return userDetails.getAuthorities()
                .stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());
    }

    private String getJwt(String token) {
        if (StringUtils.isEmpty(token) || !StringUtils.startsWith(token, "Bearer ")) {
            throw new JwtException("Provided token is invalid");
        }

        return token.substring(7);
    }
}
