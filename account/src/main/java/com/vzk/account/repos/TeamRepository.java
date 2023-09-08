package com.vzk.account.repos;

import com.vzk.account.constants.Game;
import com.vzk.account.models.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TeamRepository extends JpaRepository<Team, Integer> {
    boolean existsByName(String name);

    List<Team> findAllByGame(Game games);
}
