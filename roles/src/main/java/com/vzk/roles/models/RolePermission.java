package com.vzk.roles.models;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "roles_permissions")
public class RolePermission implements Serializable {
    @EmbeddedId
    private RolePermissionID rolePermissionID;
}
