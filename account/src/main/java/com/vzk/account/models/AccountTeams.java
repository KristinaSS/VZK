package com.vzk.account.models;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "account_teams")
public class AccountTeams {
    @EmbeddedId
    private AccountTeamsId accountTeamsId;
}
