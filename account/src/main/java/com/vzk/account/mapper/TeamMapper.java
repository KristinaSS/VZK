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

    @Mapping(source = "id", target = "id")
    @Mapping(source = "name", target = "name")
    @Mapping(source = "captain", target = "captain", qualifiedByName = "mapCaptain")
    @Mapping(source = "game", target = "game", qualifiedByName = "mapGame")
    @Mapping(source = "isActive", target = "isActive")
    Team mapToModel(TeamDTO teamDTO);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "name", target = "name")
    @Mapping(source = "captain", target = "captain", qualifiedByName = "mapCaptain")
    @Mapping(source = "game", target = "game", qualifiedByName = "mapGame")
    Team mapToModel(UpdateTeamDTO updateTeamDTO);

    @Mapping(source = "name", target = "name")
    @Mapping(source = "captain", target = "captain", qualifiedByName = "mapCaptain")
    @Mapping(source = "game", target = "game", qualifiedByName = "mapGame")
    Team mapToModel(CreateTeamDTO createTeamDTO);

    @Named("mapCaptain")
    default Account mapCaptain(UUID captainId) {
        AccountService accountService = new AccountServiceImpl();
        return ACCOUNT_MAPPER.mapToModel(accountService.getAccountById(captainId.toString()));
    }

    @Named("mapGame")
    default Game mapGame(UUID gameId) {
        GameService gameService = new GameServiceImpl();
        return GAME_MAPPER.mapToModel(gameService.getGameByID(gameId.toString()));
    }
}
