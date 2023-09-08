package com.vzk.account.mapper;

import com.vzk.account.models.Account;
import com.vzk.account.models.Team;
import com.vzk.account.services.AccountService;
import com.vzk.account.services.impl.AccountServiceImpl;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.factory.Mappers;
import org.openapitools.model.TeamDTO;
import org.openapitools.model.UpdateTeamDTO;
import org.openapitools.model.CreateTeamDTO;

import static com.vzk.account.mapper.AccountMapper.ACCOUNT_MAPPER;

@Mapper
public interface TeamMapper {
    TeamMapper TEAM_MAPPER = Mappers.getMapper(TeamMapper.class);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "name", target = "name")
    @Mapping(source = "captain.id", target = "captain")
    @Mapping(source = "game", target = "game")
    @Mapping(source = "active", target = "isActive")
    TeamDTO mapToDTO(Team team);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "name", target = "name")
    @Mapping(source = "captain", target = "captain", qualifiedByName = "mapCaptain")
    @Mapping(source = "game", target = "game")
    @Mapping(source = "isActive", target = "isActive")
    Team mapToModel(TeamDTO teamDTO);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "name", target = "name")
    @Mapping(source = "captain", target = "captain", qualifiedByName = "mapCaptain")
    @Mapping(source = "game", target = "game")
    Team mapToModel(UpdateTeamDTO updateTeamDTO);

    @Mapping(source = "name", target = "name")
    @Mapping(source = "captain", target = "captain", qualifiedByName = "mapCaptain")
    @Mapping(source = "game", target = "game")
    Team mapToModel(CreateTeamDTO createTeamDTO);

    @Named("mapCaptain")
    default Account mapCaptain(int captainId) {
        AccountService accountService = new AccountServiceImpl();
        return ACCOUNT_MAPPER.mapToModel(accountService.getAccountById(captainId));
    }
}
