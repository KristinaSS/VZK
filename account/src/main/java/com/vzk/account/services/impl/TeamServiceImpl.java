package com.vzk.account.services.impl;

import com.vzk.account.constants.Game;
import com.vzk.account.exceptions.EntityAlreadyDeactivatedException;
import com.vzk.account.exceptions.EntityNotFoundException;
import com.vzk.account.exceptions.TeamNameUnavailableException;
import com.vzk.account.models.Team;
import com.vzk.account.repos.AccountDetailsRepository;
import com.vzk.account.repos.AccountRepository;
import com.vzk.account.repos.TeamRepository;
import com.vzk.account.services.TeamService;
import org.openapitools.model.CreateTeamDTO;
import org.openapitools.model.PlayerDTO;
import org.openapitools.model.TeamDTO;
import org.openapitools.model.UpdateTeamDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import static com.vzk.account.mapper.PlayerMapper.PLAYER_MAPPER;
import static com.vzk.account.mapper.TeamMapper.TEAM_MAPPER;

@Service
public class TeamServiceImpl implements TeamService {

    @Autowired
    private TeamRepository teamRepository;

    private static final String ENTITY = "team";

    @Override
    public TeamDTO createTeam(CreateTeamDTO createTeamDTO) {
        Team createdTeam = TEAM_MAPPER.mapToModel(createTeamDTO);
        createdTeam.setActive(true);

        //check if name available
        verifyNameUnique(createdTeam.getName());

        Team savedTeam = teamRepository.save(createdTeam);
        return TEAM_MAPPER.mapToDTO(savedTeam);
    }

    @Override
    public void deactivateTeam(int id) {
        Team team = findTeam(id);

        //verify if deactivated
        verifyIfTeamActive(team);

        team.setActive(false);
        teamRepository.save(team);
    }

    @Override
    public List<TeamDTO> getAllActiveTeams() {
        return teamRepository.findAll().stream()
                .filter(Team::isActive)
                .map(TEAM_MAPPER::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<PlayerDTO> getAllPlayersByTeam(int teamId) {
        Team team = findTeam(teamId);
        return team.getMembers().stream()
                .map(player-> PLAYER_MAPPER.mapToDTO(player.getAccount(), player))
                .collect(Collectors.toList());
    }

    @Override
    public List<TeamDTO> getAllTeams() {
        return teamRepository.findAll().stream()
                .map(TEAM_MAPPER::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<TeamDTO> getAllTeamsByGame(String game) {
        Game filter = Game.findGame(game);
        return teamRepository.findAllByGame(filter).stream()
                .map(TEAM_MAPPER::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public TeamDTO getTeamById(int teamId) {
        Team team = findTeam(teamId);
        return TEAM_MAPPER.mapToDTO(team);
    }

    @Override
    public void updateTeam(UpdateTeamDTO updateTeamDTO) {
        Team team = TEAM_MAPPER.mapToModel(updateTeamDTO);

        //check if name available
        verifyNameUnique(team.getName());

        teamRepository.save(team);
    }

    private void verifyNameUnique(String name) {
        if(teamRepository.existsByName(name)){
            throw new TeamNameUnavailableException(name);
        }
    }

    private Team findTeam(int id) {
        return teamRepository.findById(id).orElseThrow(
                () -> new EntityNotFoundException(ENTITY, "id", "" + id));
    }

    private void verifyIfTeamActive(Team team) {
        if(!team.isActive()){
            throw new EntityAlreadyDeactivatedException(ENTITY, team.getId());
        }
    }
}
