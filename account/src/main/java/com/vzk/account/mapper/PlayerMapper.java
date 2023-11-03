package com.vzk.account.mapper;

import com.vzk.account.models.Account;
import com.vzk.account.models.AccountDetails;
import com.vzk.account.models.Team;
import com.vzk.account.services.TeamService;
import com.vzk.account.services.impl.TeamServiceImpl;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.factory.Mappers;
import org.openapitools.model.CreatePlayerDTO;
import org.openapitools.model.PlayerDTO;
import org.openapitools.model.UpdatePlayerDTO;

import java.util.UUID;

import static com.vzk.account.mapper.TeamMapper.TEAM_MAPPER;

@Mapper
public interface PlayerMapper {
    PlayerMapper PLAYER_MAPPER = Mappers.getMapper(PlayerMapper.class);

    @Mapping(source = "accountDetails.id", target = "id")
    @Mapping(source = "account.name", target = "name")
    @Mapping(source = "account.email", target = "email")
    @Mapping(source = "account.username", target = "username")
    @Mapping(source = "account.password", target = "password")
    @Mapping(source = "account.active", target = "isActive")
    @Mapping(source = "accountDetails.team.id", target = "team")
    @Mapping(source = "accountDetails.birthday", target = "birthday")
    @Mapping(source = "accountDetails.countryOrigin", target = "countryOrigin")
    @Mapping(source = "accountDetails.image", target = "image")
    @Mapping(source = "accountDetails.gender", target = "gender")
    @Mapping(source = "accountDetails.playerName", target = "playerName")
    PlayerDTO mapToDTO(Account account, AccountDetails accountDetails);

    @Mapping(source = "team", target = "team", qualifiedByName = "mapTeam")
    @Mapping(source = "birthday", target = "birthday")
    @Mapping(source = "countryOrigin", target = "countryOrigin")
    @Mapping(source = "image", target = "image")
    @Mapping(source = "gender", target = "gender")
    @Mapping(source = "playerName", target = "playerName")
    AccountDetails mapToModel(CreatePlayerDTO playerDTO);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "team", target = "team", qualifiedByName = "mapTeam")
    @Mapping(source = "birthday", target = "birthday")
    @Mapping(source = "countryOrigin", target = "countryOrigin")
    @Mapping(source = "image", target = "image")
    @Mapping(source = "gender", target = "gender")
    @Mapping(source = "playerName", target = "playerName")
    AccountDetails mapToModel(UpdatePlayerDTO playerDTO);

    @Named("mapTeam")
    default Team mapTeam(UUID teamId) {
        TeamService teamService = new TeamServiceImpl();
        return TEAM_MAPPER.mapToModel(teamService.getTeamById(teamId.toString()));
    }
}
