package com.vzk.request.models;

import com.vzk.request.constants.Gender;
import com.vzk.request.constants.Rank;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "application_request")
public class ApplicationRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "contact_request", referencedColumnName = "id")
    private ContactRequest contactRequest;

    @Basic
    @Column(name = "player_name")
    private String playerName;

    @Basic
    @Column(name = "profile_url")
    private String profileURL;

    @Basic
    @Column(name = "max_rank")
    private String maxRank;

    @Basic
    @Column(name = "gender")
    private Gender gender;

    @Basic
    @Column(name = "birthday")
    private Date birthday;

    @Basic
    @Column(name = "country_origin")
    private String countryOrigin; //todo enum with flag and name

    @Basic
    @Column(name = "applied_role")
    private String appliedRole;

    @Basic
    @Column(name = "applied_game")
    private String appliedGame;

    @Basic
    @Column(name = "description")
    private String description;
}
