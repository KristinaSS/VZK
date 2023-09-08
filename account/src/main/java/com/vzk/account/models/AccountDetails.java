package com.vzk.account.models;

import com.vzk.account.constants.Gender;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "account_details")
public class AccountDetails{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "account_id", referencedColumnName = "id")
    private Account account;

    @ManyToOne(fetch = FetchType.LAZY)
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
    private Gender playerName;

    @Basic
    @Column(name = "image")
    private String image;
}
