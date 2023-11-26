package com.vzk.gateway.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.util.Objects;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class JwtAuthorizationRequest {

    @JsonProperty("path")
    private String path;

    @JsonProperty("email")
    private String email;

    @JsonProperty("id")
    private String id;

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        JwtAuthorizationRequest jwtAuthorizationRequest = (JwtAuthorizationRequest) o;
        return Objects.equals(this.path, jwtAuthorizationRequest.path) &&
                Objects.equals(this.email, jwtAuthorizationRequest.email) &&
                Objects.equals(this.id, jwtAuthorizationRequest.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(path, email, id);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class JwtAuthorizationRequest {\n");
        sb.append("    path: ").append(toIndentedString(path)).append("\n");
        sb.append("    email: ").append(toIndentedString(email)).append("\n");
        sb.append("    id: ").append(toIndentedString(id)).append("\n");
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

