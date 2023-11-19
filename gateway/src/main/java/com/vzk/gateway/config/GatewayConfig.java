package com.vzk.gateway.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.vzk.gateway.feign.SecurityClient;
import com.vzk.gateway.model.JwtAuthorizationRequest;
import com.vzk.gateway.model.JwtAuthorizationResponse;
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
import org.springframework.web.server.ServerWebExchange;
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
                                    isValid = String.valueOf(isRequestValid(exchange));
                                    if (!Boolean.parseBoolean(isValid)) {
                                        return Mono.error(new RuntimeException("Invalid token"));
                                    }
                                    return Mono.just(isValid);
                                }))
                        .uri("http://localhost:8082"))
                .build();
    }

    private boolean isRequestValid(ServerWebExchange exchange) {
        String token = exchange.getRequest().getHeaders().getFirst("Authorization");
        String path = exchange.getRequest().getPath().value();

        boolean isValid = securityClient.validateToken(token).getIsValid();
        boolean isAuthorized = securityClient.authorizeRequest(token, new JwtAuthorizationRequest(path)).getIsValid();

        return isValid && isAuthorized;
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
