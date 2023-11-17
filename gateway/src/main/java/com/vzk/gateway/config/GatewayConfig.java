package com.vzk.gateway.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.vzk.gateway.feign.SecurityClient;
import feign.codec.Decoder;
import feign.codec.Encoder;
import feign.jackson.JacksonDecoder;
import feign.jackson.JacksonEncoder;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import reactor.core.publisher.Mono;

@Configuration
@EnableHystrix
@RequiredArgsConstructor
public class GatewayConfig {

    private SecurityClient securityClient;

    @Autowired
    public void setSecurityClient(@Lazy SecurityClient securityClient) {
        this.securityClient = securityClient;
    }

    @Bean
    public RouteLocator routes(RouteLocatorBuilder builder) {
        return builder.routes()
                .route("ACCOUNT-SERVICE", r -> r
                        .path("/account/**")
                        .filters(f -> f.modifyRequestBody(String.class, String.class,
                                (exchange, isValid) -> {
                                    String token = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImpvaG4uZG9lQGV4YW1wbGUuY29tIiwicGVybWlzc2lvbnMiOiJbY2hhbmdlLXBsYXllci1waWN0dXJlLCB2aWV3LXVzZXItcHJvZmlsZSwgY2hhbmdlLXBsYXllci1pbmZvLCBndWVzdC1wZXJtaXNzaW9uc10iLCJzdWIiOiJ1c2VyIiwiaWF0IjoxNzAwMjYyNDY0LCJleHAiOjE3MDAyNjYwNjR9.Anuu1VSBFYeSPv6OKOmfxkcapC985QFhZECDwg44_Qw";
                                    isValid = securityClient.validateToken("Bearer " + token).getIsValid().toString();
                                    if (!Boolean.parseBoolean(isValid)) {
                                        return Mono.error(new RuntimeException("Invalid token"));
                                    }
                                    return Mono.just(isValid);
                                }))
                        .uri("http://localhost:8082"))
                .build();
    }

    @Bean
    public Decoder decoder(ObjectMapper objectMapper) {
        return new JacksonDecoder(objectMapper);
    }

    @Bean
    public Encoder encoder(ObjectMapper objectMapper) {
        return new JacksonEncoder(objectMapper);
    }

}
