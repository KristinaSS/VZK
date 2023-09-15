package com.vzk.roles.models;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.UUID;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class RoleAccountID  implements Serializable {
    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;

    @Basic
    @Column(name = "account_id")
    private UUID accountId;
}
