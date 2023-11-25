package com.vzk.account.services.impl;

import com.vzk.account.exceptions.EntityAlreadyDeactivatedException;
import com.vzk.account.exceptions.EntityNotFoundException;
import com.vzk.account.exceptions.TeamNameUnavailableException;
import com.vzk.account.models.Account;
import com.vzk.account.models.Game;
import com.vzk.account.models.Team;
import com.vzk.account.repos.AccountRepository;
import com.vzk.account.repos.GameRepository;
import com.vzk.account.repos.TeamRepository;
import com.vzk.account.services.GameService;
import com.vzk.account.services.TeamService;
import org.openapitools.model.CreateTeamDTO;
import org.openapitools.model.PlayerDTO;
import org.openapitools.model.TeamDTO;
import org.openapitools.model.UpdateTeamDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import static com.vzk.account.mapper.GameMapper.GAME_MAPPER;
import static com.vzk.account.mapper.PlayerMapper.PLAYER_MAPPER;
import static com.vzk.account.mapper.TeamMapper.TEAM_MAPPER;

@Service
public class TeamServiceImpl implements TeamService {

    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private GameRepository gameRepository;

    @Autowired
    private GameService gameService;

    private static final String ENTITY = "team";

    @Override
    public TeamDTO createTeam(CreateTeamDTO createTeamDTO) {
        Account captain = findCaptain(createTeamDTO.getCaptain());
        Game game = findGame(createTeamDTO.getGame());

        Team createdTeam = TEAM_MAPPER.mapToModel(createTeamDTO, captain, game);
        createdTeam.setActive(true);

        //check if name available
        verifyNameUnique(createdTeam.getName());

        Team savedTeam = teamRepository.save(createdTeam);
        return TEAM_MAPPER.mapToDTO(savedTeam);
    }

    @Override
    public void deactivateTeam(String id) {
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
    public List<PlayerDTO> getAllPlayersByTeam(String teamId) {
        Team team = findTeam(teamId);
        return team.getMembers().stream()
                .map(player -> PLAYER_MAPPER.mapToDTO(player.getAccount(), player))
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
        Game filter = GAME_MAPPER.mapToModel(gameService.getGameByID(game));
        return teamRepository.findAllByGame(filter).stream()
                .map(TEAM_MAPPER::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public TeamDTO getTeamById(String teamId) {
        Team team = findTeam(teamId);
        return TEAM_MAPPER.mapToDTO(team);
    }

    @Override
    public void updateTeam(UpdateTeamDTO updateTeamDTO) {
        Team team = TEAM_MAPPER.mapToModel(updateTeamDTO, null, null);

        //check if name available
        verifyNameUnique(team.getName());

        team.setActive(true);
        teamRepository.save(team);
    }

    private void verifyNameUnique(String name) {
        if (teamRepository.existsByName(name)) {
            throw new TeamNameUnavailableException(name);
        }
    }

    private Team findTeam(String id) {
        return teamRepository.findById(UUID.fromString(id)).orElseThrow(
                () -> new EntityNotFoundException(ENTITY, "id", id));
    }

    private void verifyIfTeamActive(Team team) {
        if (!team.isActive()) {
            throw new EntityAlreadyDeactivatedException(ENTITY, team.getId().toString());
        }
    }

    private Account findCaptain(UUID captain){
        return accountRepository.findById(captain).orElseThrow(
                () -> new EntityNotFoundException("Account", "id", captain.toString()));
    }

    private Game findGame(UUID game) {
        return gameRepository.findById(game).orElseThrow(
                () -> new EntityNotFoundException("Game", "id", game.toString()));
    }
}
