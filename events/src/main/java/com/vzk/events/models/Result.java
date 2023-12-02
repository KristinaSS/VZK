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
@Entity(name = "result")
public class Result {
    @Id
    @Column(name = "id")
    private UUID id;

    @Basic
    @Column(name = "title")
    private String title;

    @Basic
    @Column(name = "game")
    private UUID game;

    @Basic
    @Column(name = "date_time")
    private String dateTime;

    @Basic
    @Column(name = "enemy_logo_url")
    private String enemyLogoURL;

    @Basic
    @Column(name = "enemy_result")
    private String enemyResult;

    @Basic
    @Column(name = "team_result")
    private String teamResult;

    @Basic
    @Column(name = "replay_url")
    private String replayURL;

    @Basic
    @Column(name = "is_active")
    private boolean isActive;

    @Basic
    @Column(name = "description")
    private String description;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "event_id", referencedColumnName = "id")
    private Event event;
}
