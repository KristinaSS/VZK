package com.vzk.roles.models;

import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class RolePermissionID implements Serializable {
    @ManyToOne
    @JoinColumn(name = "id_roles")
    private Role role;

    @ManyToOne
    @JoinColumn(name = "id_permissions")
    private Permission permission;
}
