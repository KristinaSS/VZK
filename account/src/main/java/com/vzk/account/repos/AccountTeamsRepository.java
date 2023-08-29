package com.vzk.account.repos;

import com.vzk.account.models.AccountTeams;
import com.vzk.account.models.AccountTeamsId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountTeamsRepository extends JpaRepository<AccountTeams, AccountTeamsId> {
}
