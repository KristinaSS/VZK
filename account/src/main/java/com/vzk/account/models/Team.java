package com.vzk.account.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "teams")
public class Team {
    @Id
    @Column(name = "id")
    private UUID id;

    @Basic
    @Column(name = "name")
    private String name;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "captain", referencedColumnName = "id")
    private Account captain;

    @ManyToOne
    @JoinColumn(name = "game")
    private Game game;

    @Basic
    @Column(name = "description")
    private String description;

    @Basic
    @Column(name = "is_active")
    private boolean isActive;
}
