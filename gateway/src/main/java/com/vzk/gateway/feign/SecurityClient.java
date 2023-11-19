package com.vzk.gateway.feign;

import com.vzk.gateway.model.JwtAuthorizationRequest;
import com.vzk.gateway.model.JwtAuthorizationResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(name = "security-service", url = "http://localhost:8081/api/v1/auth")
public interface SecurityClient {

    @GetMapping("/validateToken")
    JwtAuthorizationResponse validateToken(@RequestHeader(HttpHeaders.AUTHORIZATION) String authorizationHeader);

    @PostMapping(path = "/authorize", consumes = MediaType.APPLICATION_JSON_VALUE)
    JwtAuthorizationResponse authorizeRequest(@RequestHeader(HttpHeaders.AUTHORIZATION) String authorizationHeader, @RequestBody JwtAuthorizationRequest request);
}
