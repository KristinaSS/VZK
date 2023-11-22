package com.vzk.account.models;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

import java.util.UUID;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "game")
public class Game {
    @Id
    @Column(name = "id")
    private UUID id;

    @Basic
    @Column(name = "title")
    private String title;

    @Basic
    @Column(name = "img")
    private String image;

    @Basic
    @Column(name = "logo")
    private String logo;
}