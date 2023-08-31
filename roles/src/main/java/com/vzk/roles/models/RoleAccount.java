package com.vzk.roles.models;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "roles_accounts")
public class RoleAccount {
    @EmbeddedId
    private RoleAccountID rolePermissionID;
}
