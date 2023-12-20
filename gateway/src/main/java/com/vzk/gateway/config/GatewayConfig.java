package com.vzk.gateway.config;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.vzk.gateway.feign.SecurityClient;
import com.vzk.gateway.model.JwtAuthorizationRequest;
import feign.codec.Decoder;
import feign.codec.Encoder;
import feign.jackson.JacksonDecoder;
import feign.jackson.JacksonEncoder;
import lombok.RequiredArgsConstructor;
import org.reactivestreams.Publisher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
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
                //SECURITY SERVICE
                .route("SECURITY-SERVICE-LOGIN", r -> r
                        .path("/api/v1/auth/login")
                        .uri("http://localhost:8081"))

                .route("SECURITY-SERVICE-SIGNUP", r -> r
                        .path("/api/v1/auth/signup")
                        .uri("http://localhost:8081"))

                .route("SECURITY-SERVICE-VERIFY", r -> r
                        .path("/api/v1/auth/verify")
                        .uri("http://localhost:8081"))

                .route("SECURITY-SERVICE-RESEND", r -> r
                        .path("/api/v1/auth/resend")
                        .uri("http://localhost:8081"))

                //ACCOUNT SERVICE
                .route("ACCOUNT-SERVICE", r -> r
                        .path("/account/**")
                        .filters(f -> f.modifyRequestBody(String.class, String.class,
                                (exchange, isValid) -> validateRequest(exchange)))
                        .uri("http://localhost:8082"))

                .route("GAME-SERVICE", r -> r
                        .path("/game/**")
                        .filters(f -> f.modifyRequestBody(String.class, String.class,
                                (exchange1, isValid1) -> validateRequest(exchange1)))
                        .uri("http://localhost:8082"))

                .route("PLAYER-SERVICE", r -> r
                        .path("/player/**")
                        .filters(f -> f.modifyRequestBody(String.class, String.class,
                                (exchange, isValid) -> validateRequest(exchange)))
                        .uri("http://localhost:8082"))

                .route("TEAM-SERVICE", r -> r
                        .path("/team/**")
                        .filters(f -> f.modifyRequestBody(String.class, String.class,
                                (exchange, isValid) -> validateRequest(exchange)))
                        .uri("http://localhost:8082"))

                //NEWS SERVICE
                .route(" NEWS-SERVICE", r -> r
                        .path("/article/**")
                        .filters(f -> f.modifyRequestBody(String.class, String.class,
                                (exchange, modifiedBody) -> {
                                    HttpHeaders headers = exchange.getRequest().getHeaders();
                                    MediaType contentType = headers.getContentType();

                                    if (contentType != null && contentType.isCompatibleWith(MediaType.APPLICATION_JSON)) {
                                        // Modify the JSON body as needed
                                        String modifiedJsonBody = modifyJsonBody(modifiedBody);

                                        // Validate the request
                                        String isValid = String.valueOf(isRequestValid(exchange));
                                        if (!Boolean.parseBoolean(isValid)) {
                                            return Mono.error(new RuntimeException("Invalid token"));
                                        }

                                        return Mono.just(modifiedJsonBody);
                                    } else {
                                        // If the content type is not JSON, leave it unchanged
                                        return Mono.just(modifiedBody);
                                    }
                                }))
                        .uri("http://localhost:8085"))

                //EVENTS SERVICE
                .route(" EVENTS-SERVICE", r -> r
                        .path("/event/**")
                        .filters(f -> f.modifyRequestBody(String.class, String.class,
                                (exchange, isValid) -> validateRequest(exchange)))
                        .uri("http://localhost:8084"))

                .route(" RESULT-SERVICE", r -> r
                        .path("/result/**")
                        .filters(f -> f.modifyRequestBody(String.class, String.class,
                                (exchange, isValid) -> validateRequest(exchange)))
                        .uri("http://localhost:8084"))

                //REQUEST SERVICE
                .route(" REQUEST-SERVICE", r -> r
                        .path("/request/**")
                        .filters(f -> f.modifyRequestBody(String.class, String.class,
                                (exchange, modifiedBody) -> {
                                    HttpHeaders headers = exchange.getRequest().getHeaders();
                                    MediaType contentType = headers.getContentType();

                                    if (contentType != null && contentType.isCompatibleWith(MediaType.APPLICATION_JSON)) {
                                        // Modify the JSON body as needed
                                        String modifiedJsonBody = modifyJsonBody(modifiedBody);

                                        // Validate the request
                                        String isValid = String.valueOf(isRequestValid(exchange));
                                        if (!Boolean.parseBoolean(isValid)) {
                                            return Mono.error(new RuntimeException("Invalid token"));
                                        }

                                        return Mono.just(modifiedJsonBody);
                                    } else {
                                        // If the content type is not JSON, leave it unchanged
                                        return Mono.just(modifiedBody);
                                    }
                                }))

                        .uri("http://localhost:8086"))
                .build();
    }

    private Publisher<String> validateRequest(ServerWebExchange exchange) {
        String isValid = String.valueOf(isRequestValid(exchange));
        if (!Boolean.parseBoolean(isValid)) {
            return Mono.error(new RuntimeException("Invalid token"));
        }
        return Mono.just(isValid);
    }

    private boolean isRequestValid(ServerWebExchange exchange) {
        String token = exchange.getRequest().getHeaders().getFirst("Authorization");
        String path = exchange.getRequest().getPath().value();
        JwtAuthorizationRequest jwtAuthorizationRequest = new JwtAuthorizationRequest();

        jwtAuthorizationRequest.setPath(path);
        jwtAuthorizationRequest.setId(
                exchange.getRequest().getQueryParams().containsKey("id")
                        ? exchange.getRequest().getQueryParams().get("id").get(0) : null);
        jwtAuthorizationRequest.setEmail(
                exchange.getRequest().getQueryParams().containsKey("email")
                        ? exchange.getRequest().getQueryParams().get("email").get(0) : null);

        assert token != null;
        boolean isValid = token.substring(7).equals("anonymous") || securityClient.validateToken(token).getIsValid();
        boolean isAuthorized = securityClient.authorizeRequest(token, jwtAuthorizationRequest).getIsValid();

        return isValid && isAuthorized;
    }

    private String modifyJsonBody(String originalJsonBody) {
        // Example: Add a new field to the JSON body
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            JsonNode jsonNode = objectMapper.readTree(originalJsonBody);
            ((ObjectNode) jsonNode).put("newField", "modifiedValue");
            return objectMapper.writeValueAsString(jsonNode);
        } catch (JsonProcessingException e) {
            // Handle JSON processing exception
            e.printStackTrace();
            return originalJsonBody; // Return the original body if modification fails
        }
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
