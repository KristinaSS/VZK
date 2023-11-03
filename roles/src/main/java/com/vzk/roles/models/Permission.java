package com.vzk.roles.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "permissions")
public class Permission {
    @Id
    @Column(name = "id")
    private UUID id;

    @Basic
    @Column(name = "name")
    private String name;

    @Basic
    @Column(name = "is_active")
    private boolean isActive;
}
