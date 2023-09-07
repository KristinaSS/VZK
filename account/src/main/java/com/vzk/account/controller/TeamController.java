package com.vzk.account.controller;

import org.openapitools.api.TeamApi;
import org.openapitools.model.CreateTeamDTO;
import org.openapitools.model.PlayerDTO;
import org.openapitools.model.TeamDTO;
import org.openapitools.model.UpdateTeamDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class TeamController implements TeamApi {
    @Override
    public ResponseEntity<TeamDTO> createTeam(TeamDTO newTeam, CreateTeamDTO createTeamDTO) {
        return null;
    }

    @Override
    public ResponseEntity<Void> deactivatePlayer(Integer team) {
        return null;
    }

    @Override
    public ResponseEntity<List<TeamDTO>> getAllActiveTeams() {
        return null;
    }

    @Override
    public ResponseEntity<List<PlayerDTO>> getAllPlayersByTeam(Integer team) {
        return null;
    }

    @Override
    public ResponseEntity<List<TeamDTO>> getAllTeams() {
        return null;
    }

    @Override
    public ResponseEntity<List<TeamDTO>> getAllTeamsByGameId(Integer game) {
        return null;
    }

    @Override
    public ResponseEntity<TeamDTO> getTeamById(Integer team) {
        return null;
    }

    @Override
    public ResponseEntity<Void> updateTeam(TeamDTO updatedTeam, UpdateTeamDTO updateTeamDTO) {
        return null;
    }
}
