package com.vzk.roles.models;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import lombok.*;

import java.io.Serializable;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "roles_permissions")
public class RolePermission implements Serializable {
    @EmbeddedId
    private RolePermissionID rolePermissionID;
}
