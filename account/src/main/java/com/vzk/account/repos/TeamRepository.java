package com.vzk.account.repos;

import com.vzk.account.models.Game;
import com.vzk.account.models.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface TeamRepository extends JpaRepository<Team, UUID> {
    boolean existsByName(String name);

    List<Team> findAllByGame(Game games);

    boolean existsByGame(Game game);
}
