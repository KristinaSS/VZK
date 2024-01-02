package com.vzk.account.mapper;

import com.vzk.account.models.Account;
import com.vzk.account.models.AccountDetails;
import com.vzk.account.models.Team;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import org.openapitools.model.*;

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
    @Mapping(source = "accountDetails.role", target = "role")
    @Mapping(source = "accountDetails.twitter", target = "twitter")
    @Mapping(source = "accountDetails.twitch", target = "twitch")
    @Mapping(source = "accountDetails.youtube", target = "youtube")
    @Mapping(source = "accountDetails.instagram", target = "instagram")
    PlayerDTO mapToDTO(Account account, AccountDetails accountDetails);

    @Mapping(target = "id", expression = "java(java.util.UUID.randomUUID())")
    @Mapping(source = "team", target = "team")
    @Mapping(source = "playerDTO.birthday", target = "birthday")
    @Mapping(source = "playerDTO.countryOrigin", target = "countryOrigin")
    @Mapping(source = "playerDTO.image", target = "image")
    @Mapping(source = "playerDTO.playerName", target = "playerName")
    @Mapping(source = "linkedAccount", target = "account")
    @Mapping(source = "playerDTO.role", target = "role")
    @Mapping(source = "playerDTO.twitter", target = "twitter")
    @Mapping(source = "playerDTO.twitch", target = "twitch")
    @Mapping(source = "playerDTO.youtube", target = "youtube")
    @Mapping(source = "playerDTO.instagram", target = "instagram")
    AccountDetails mapToModel(CreatePlayerDTO playerDTO, Team team, Account linkedAccount);

    @Mapping(source = "playerDTO.id", target = "id")
    @Mapping(source = "linkedAccount", target = "account")
    @Mapping(source = "team", target = "team")
    @Mapping(source = "playerDTO.birthday", target = "birthday")
    @Mapping(source = "playerDTO.countryOrigin", target = "countryOrigin")
    @Mapping(source = "playerDTO.image", target = "image")
    @Mapping(source = "playerDTO.gender", target = "gender")
    @Mapping(source = "playerDTO.playerName", target = "playerName")
    @Mapping(source = "playerDTO.role", target = "role")
    @Mapping(source = "playerDTO.twitter", target = "twitter")
    @Mapping(source = "playerDTO.twitch", target = "twitch")
    @Mapping(source = "playerDTO.youtube", target = "youtube")
    @Mapping(source = "playerDTO.instagram", target = "instagram")
    AccountDetails mapToModel(UpdatePlayerAdminDTO playerDTO, Team team, Account linkedAccount);

    @Mapping(source = "playerDTO.id", target = "id")
    @Mapping(source = "linkedAccount", target = "account")
    @Mapping(source = "playerDTO.birthday", target = "birthday")
    @Mapping(source = "playerDTO.countryOrigin", target = "countryOrigin")
    @Mapping(source = "playerDTO.image", target = "image")
    @Mapping(source = "playerDTO.gender", target = "gender")
    @Mapping(source = "playerDTO.playerName", target = "playerName")
    @Mapping(source = "playerDTO.twitter", target = "twitter")
    @Mapping(source = "playerDTO.twitch", target = "twitch")
    @Mapping(source = "playerDTO.youtube", target = "youtube")
    @Mapping(source = "playerDTO.instagram", target = "instagram")
    AccountDetails mapToModel(UpdatePlayerUserDTO playerDTO, Account linkedAccount);

    @Mapping(source = "account.name", target = "name")
    @Mapping(source = "account.email", target = "email")
    @Mapping(source = "account.username", target = "username")
    @Mapping(source = "accountDetails.team.name", target = "team")
    @Mapping(source = "accountDetails.team.game.logo", target = "game")
    @Mapping(source = "accountDetails.birthday", target = "birthday")
    @Mapping(source = "accountDetails.countryOrigin", target = "countryOrigin")
    @Mapping(source = "accountDetails.image", target = "image")
    @Mapping(source = "accountDetails.gender", target = "gender")
    @Mapping(source = "accountDetails.playerName", target = "playerName")
    @Mapping(source = "accountDetails.role", target = "role")
    @Mapping(source = "accountDetails.twitter", target = "twitter")
    @Mapping(source = "accountDetails.twitch", target = "twitch")
    @Mapping(source = "accountDetails.youtube", target = "youtube")
    @Mapping(source = "accountDetails.instagram", target = "instagram")
    ShortPlayerDTO mapToShortDTO(Account account, AccountDetails accountDetails);
}
