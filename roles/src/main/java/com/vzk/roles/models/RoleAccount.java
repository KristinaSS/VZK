package com.vzk.roles.models;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "roles_accounts")
public class RoleAccount {
    @EmbeddedId
    private RoleAccountID roleAccountID;
}
