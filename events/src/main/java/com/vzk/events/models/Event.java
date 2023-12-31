package com.vzk.events.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "events")
public class Event {
    @Id
    @Column(name = "id")
    private UUID id;

    @Basic
    @Column(name = "name")
    private String name;

    @Basic
    @Column(name = "info")
    private String info;

    @Basic
    @Column(name = "date")
    private String date;

    @Basic
    @Column(name = "is_active")
    private boolean isActive;

    @Basic
    @Column(name = "game")
    private UUID game;

    @Basic
    @Column(name = "enemy_logo")
    private String enemyLogo;
}
