package com.vzk.request.models;

import com.vzk.request.constants.Gender;
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
@Entity(name = "application_request")
public class ApplicationRequest {
    @Id
    @Column(name = "id")
    private UUID id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "contact_request", referencedColumnName = "id")
    private ContactRequest contactRequest;

    @Basic
    @Column(name = "application_type")
    private String applicationType;

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
    private String birthday;

    @Basic
    @Column(name = "country_origin")
    private String countryOrigin; //todo enum with flag and name

    @Basic
    @Column(name = "applied_role")
    private String appliedRole;

    @Basic
    @Column(name = "applied_game")
    private UUID appliedGame;

    @Basic
    @Column(name = "description")
    private String description;
}
