package com.vzk.account.mapper;

import com.vzk.account.models.Account;
import com.vzk.account.models.Game;
import com.vzk.account.models.Team;
import com.vzk.account.services.AccountService;
import com.vzk.account.services.GameService;
import com.vzk.account.services.impl.AccountServiceImpl;
import com.vzk.account.services.impl.GameServiceImpl;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.factory.Mappers;
import org.openapitools.model.TeamDTO;
import org.openapitools.model.UpdateTeamDTO;
import org.openapitools.model.CreateTeamDTO;

import java.util.UUID;

import static com.vzk.account.mapper.AccountMapper.ACCOUNT_MAPPER;
import static com.vzk.account.mapper.GameMapper.GAME_MAPPER;

@Mapper
public interface TeamMapper {
    TeamMapper TEAM_MAPPER = Mappers.getMapper(TeamMapper.class);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "name", target = "name")
    @Mapping(source = "captain.id", target = "captain")
    @Mapping(source = "game.id", target = "game")
    @Mapping(source = "active", target = "isActive")
    TeamDTO mapToDTO(Team team);

    @Mapping(source = "teamDTO.id", target = "id")
    @Mapping(source = "teamDTO.name", target = "name")
    @Mapping(source = "captain", target = "captain")
    @Mapping(source = "game", target = "game")
    @Mapping(source = "teamDTO.isActive", target = "isActive")
    Team mapToModel(TeamDTO teamDTO, Account captain, Game game);

    @Mapping(source = "updateTeamDTO.id", target = "id")
    @Mapping(source = "updateTeamDTO.name", target = "name")
    @Mapping(source = "captain", target = "captain")
    @Mapping(source = "game", target = "game")
    Team mapToModel(UpdateTeamDTO updateTeamDTO, Account captain, Game game);

    @Mapping(source = "createTeamDTO.name", target = "name")
    @Mapping(source = "captain", target = "captain")
    @Mapping(source = "game", target = "game")
    @Mapping(target = "id", expression = "java(java.util.UUID.randomUUID())")
    Team mapToModel(CreateTeamDTO createTeamDTO, Account captain, Game game);

}
