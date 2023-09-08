package com.vzk.account.models;

import com.vzk.account.constants.Game;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "teams")
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Basic
    @Column(name = "name")
    private String name;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "captain", referencedColumnName = "id")
    private Account captain;

    @Basic
    @Column(name = "game")
    private Game game;

    @Basic
    @Column(name = "is_active")
    private boolean isActive;

    @OneToMany(mappedBy = "team")
    private List<AccountDetails> members;
}
