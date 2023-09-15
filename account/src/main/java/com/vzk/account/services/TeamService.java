package com.vzk.account.services;

import org.openapitools.model.CreateTeamDTO;
import org.openapitools.model.PlayerDTO;
import org.openapitools.model.TeamDTO;
import org.openapitools.model.UpdateTeamDTO;

import java.util.List;

public interface TeamService {
    TeamDTO createTeam(CreateTeamDTO createTeamDTO);

    void deactivateTeam(String id);

    List<TeamDTO> getAllActiveTeams();

    List<PlayerDTO> getAllPlayersByTeam(String teamId);

    List<TeamDTO> getAllTeams();

    List<TeamDTO> getAllTeamsByGame(String game);

    TeamDTO getTeamById(String teamId);

    void updateTeam(UpdateTeamDTO updateTeamDTO);
}
