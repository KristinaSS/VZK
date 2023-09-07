package com.vzk.account.mapper;

import com.vzk.account.constants.Games;
import com.vzk.account.models.Account;
import com.vzk.account.models.AccountDetails;
import com.vzk.account.models.Team;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.factory.Mappers;
import org.openapitools.model.CreatePlayerDTO;
import org.openapitools.model.PlayerDTO;
import org.openapitools.model.TeamDTO;
import org.openapitools.model.UpdatePlayerDTO;

import static com.vzk.account.mapper.AccountMapper.ACCOUNT_MAPPER;

@Mapper
public interface PlayerMapper {
    PlayerMapper PLAYER_MAPPER = Mappers.getMapper(PlayerMapper.class);

    @Mapping(source = "account.id", target = "id")
    @Mapping(source = "account.name", target = "name")
    @Mapping(source = "account.email", target = "email")
    @Mapping(source = "account.password", target = "password")
    @Mapping(source = "account.active", target = "isActive")
    @Mapping(source = "accountDetails.team.id", target = "team")
    @Mapping(source = "accountDetails.birthday", target = "birthday")
    @Mapping(source = "accountDetails.countryOrigin", target = "countryOrigin")
    @Mapping(source = "accountDetails.image", target = "image")
    @Mapping(source = "accountDetails.gender", target = "gender")
    PlayerDTO mapToDTO(Account account, AccountDetails accountDetails);

    @Mapping(source = "team", target = "team", qualifiedByName = "mapTeam")
    @Mapping(source = "birthday", target = "birthday")
    @Mapping(source = "countryOrigin", target = "countryOrigin")
    @Mapping(source = "image", target = "image")
    @Mapping(source = "gender", target = "gender")
    AccountDetails mapToModel(CreatePlayerDTO playerDTO);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "team", target = "team", qualifiedByName = "mapTeam")
    @Mapping(source = "birthday", target = "birthday")
    @Mapping(source = "countryOrigin", target = "countryOrigin")
    @Mapping(source = "image", target = "image")
    @Mapping(source = "gender", target = "gender")
    AccountDetails mapToModel(UpdatePlayerDTO playerDTO);

    @Named("mapTeam")
    default Team mapTeam(int teamId) {
        //todo add mapping logic
        return Team.builder().build();
    }
}
