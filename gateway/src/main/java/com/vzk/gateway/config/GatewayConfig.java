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
import org.springframework.cloud.gateway.route.Route;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.Buildable;
import org.springframework.cloud.gateway.route.builder.PredicateSpec;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
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
                .route("SECURITY-SERVICE", r -> configureServiceRoute(r, "/api/v1/auth/**", "http://localhost:8081"))
                .route("ACCOUNT-SERVICE", r -> configureServiceRoute(r, "/account/**", "http://localhost:8082"))
                .route("GAME-SERVICE", r -> configureServiceRoute(r, "/game/**", "http://localhost:8082"))
                .route("PLAYER-SERVICE", r -> configureServiceRoute(r, "/player/**", "http://localhost:8082"))
                .route("TEAM-SERVICE", r -> configureServiceRoute(r, "/team/**", "http://localhost:8082"))
                .route("NEWS-SERVICE", r -> configureServiceRoute(r, "/article/**", "http://localhost:8085"))
                .route("EVENTS-SERVICE", r -> configureServiceRoute(r, "/event/**", "http://localhost:8084"))
                .route("RESULT-SERVICE", r -> configureServiceRoute(r, "/result/**", "http://localhost:8084"))
                .route("REQUEST-SERVICE", r -> configureServiceRoute(r, "/request/**", "http://localhost:8086"))
                .build();
    }

    private Buildable<Route> configureServiceRoute(PredicateSpec r, String path, String uri) {
        return r.path(path)
                .filters(f -> f.modifyRequestBody(String.class, String.class, this::validateAndModifyRequest))
                .uri(uri);
    }

    private Publisher<String> validateAndModifyRequest(ServerWebExchange exchange, String modifiedBody) {
        HttpMethod method = exchange.getRequest().getMethod();
        HttpHeaders headers = exchange.getRequest().getHeaders();
        MediaType contentType = headers.getContentType();

        if (method == HttpMethod.GET || (contentType != null && contentType.isCompatibleWith(MediaType.APPLICATION_JSON))) {
            String modifiedJsonBody = modifyJsonBody(modifiedBody);

            String isValid = String.valueOf(isRequestValid(exchange));
            if (!Boolean.parseBoolean(isValid)) {
                return Mono.error(new RuntimeException("Invalid token"));
            }

            return Mono.just(modifiedJsonBody);
        } else {
            return Mono.just(modifiedBody);
        }
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
        if (originalJsonBody == null) {
            // Handle the case where the originalJsonBody is null
            return ""; // or throw an exception, or provide a default value
        }

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
