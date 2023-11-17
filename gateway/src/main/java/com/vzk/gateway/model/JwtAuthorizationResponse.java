package com.vzk.gateway.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.util.Objects;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class JwtAuthorizationResponse {

    @JsonProperty("isValid")
    private Boolean isValid;

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        JwtAuthorizationResponse jwtAuthorizationResponse = (JwtAuthorizationResponse) o;
        return Objects.equals(this.isValid, jwtAuthorizationResponse.isValid);
    }

    @Override
    public int hashCode() {
        return Objects.hash(isValid);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class JwtAuthorizationResponse {\n");
        sb.append("    isValid: ").append(toIndentedString(isValid)).append("\n");
        sb.append("}");
        return sb.toString();
    }

    private String toIndentedString(Object o) {
        if (o == null) {
            return "null";
        }
        return o.toString().replace("\n", "\n    ");
    }
}

