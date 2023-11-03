package com.vzk.account.controller;

import com.vzk.account.services.TeamService;
import org.openapitools.api.TeamApi;
import org.openapitools.model.CreateTeamDTO;
import org.openapitools.model.PlayerDTO;
import org.openapitools.model.TeamDTO;
import org.openapitools.model.UpdateTeamDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;


@RestController
public class TeamController implements TeamApi {
    @Autowired
    private TeamService teamService;
    @Override
    public ResponseEntity<TeamDTO> createTeam(CreateTeamDTO createTeamDTO) {
        return ResponseEntity.ok(teamService.createTeam(createTeamDTO));
    }

    @Override
    public ResponseEntity<Void> deactivateTeam(UUID team) {
        teamService.deactivateTeam(team.toString());
        return ResponseEntity.ok(null);
    }

    @Override
    public ResponseEntity<List<TeamDTO>> getAllActiveTeams() {
        return ResponseEntity.ok(teamService.getAllActiveTeams());
    }

    @Override
    public ResponseEntity<List<PlayerDTO>> getAllPlayersByTeam(UUID team) {
        return ResponseEntity.ok(teamService.getAllPlayersByTeam(team.toString()));
    }

    @Override
    public ResponseEntity<List<TeamDTO>> getAllTeams() {
        return ResponseEntity.ok(teamService.getAllTeams());
    }

    @Override
    public ResponseEntity<List<TeamDTO>> getAllTeamsByGame(String game) {
        return ResponseEntity.ok(teamService.getAllTeamsByGame(game));
    }

    @Override
    public ResponseEntity<TeamDTO> getTeamById(UUID team) {
        return ResponseEntity.ok(teamService.getTeamById(team.toString()));
    }

    @Override
    public ResponseEntity<Void> updateTeam(UpdateTeamDTO updateTeamDTO) {
        teamService.updateTeam(updateTeamDTO);
        return ResponseEntity.ok(null);
    }
}
