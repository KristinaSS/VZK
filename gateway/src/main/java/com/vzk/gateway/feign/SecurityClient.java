package com.vzk.gateway.feign;

import com.vzk.gateway.model.JwtAuthorizationResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(name = "security-service", url = "http://localhost:8081/api/v1/auth")
public interface SecurityClient {

    @GetMapping("/validateToken")
    JwtAuthorizationResponse validateToken(@RequestHeader("Authorization") String authorizationHeader);

}
