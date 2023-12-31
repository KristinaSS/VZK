package com.vzk.account.models;

import com.vzk.account.constants.Gender;
import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "account_details")
public class AccountDetails {
    @Id
    @Column(name = "id")
    private UUID id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "account_id", referencedColumnName = "id")
    private Account account;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "team", nullable = false)
    private Team team;

    @Basic
    @Column(name = "birthday")
    private String birthday;

    @Basic
    @Column(name = "country_origin")
    private String countryOrigin;

    @Basic
    @Column(name = "gender")
    private Gender gender;

    @Basic
    @Column(name = "player_name")
    private String playerName;

    @Basic
    @Column(name = "image")
    private String image;

    @Basic
    @Column(name = "role")
    private String role;

    @Basic
    @Column(name = "twitch")
    private String twitch;

    @Basic
    @Column(name = "twitter")
    private String twitter;

    @Basic
    @Column(name = "youtube")
    private String youtube;

    @Basic
    @Column(name = "instagram")
    private String instagram;
}
