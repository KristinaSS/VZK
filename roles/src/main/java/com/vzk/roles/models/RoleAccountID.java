package com.vzk.roles.models;

import jakarta.persistence.*;
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
public class RoleAccountID  implements Serializable {
    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;

    @Basic
    @Column(name = "account_id")
    private String name;
}
