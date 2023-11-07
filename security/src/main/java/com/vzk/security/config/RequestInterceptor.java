package com.vzk.security.config;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;


@Component
public class RequestInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String requestedEndpoint = extractEndpoint(request);

        if (userHasPermission(request, requestedEndpoint)) {
            return true;
        } else {
            response.sendError(HttpServletResponse.SC_FORBIDDEN, "Insufficient permissions");
            return false;
        }
    }

    private boolean userHasPermission(HttpServletRequest request, String requestedEndpoint) {
        String token = extractToken(request);

        switch (requestedEndpoint) {
            case "/account/all":
                return true;
            case "/account/edit":
                return true;
            default:
                return true;
        }
    }

    private String extractToken(HttpServletRequest request) {
        String authorizationHeader = request.getHeader("Authorization");

        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            return authorizationHeader.substring(7);
        }
        return null;
    }

    private String extractEndpoint(HttpServletRequest request) {
        return request.getRequestURI();
    }
}