package com.vzk.account.mapper;

import com.vzk.account.models.Game;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import org.openapitools.model.CreateGameDTO;
import org.openapitools.model.GameDTO;
import org.openapitools.model.GameUpdatedDTO;

@Mapper
public interface GameMapper {
    GameMapper GAME_MAPPER = Mappers.getMapper(GameMapper.class);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "title", target = "title")
    @Mapping(source = "image", target = "image")
    @Mapping(source = "logo", target = "logo")
    GameDTO mapToDTO(Game game);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "title", target = "title")
    @Mapping(source = "image", target = "image")
    @Mapping(source = "logo", target = "logo")
    Game mapToModel(GameDTO gameDTO);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "title", target = "title")
    @Mapping(source = "image", target = "image")
    @Mapping(source = "logo", target = "logo")
    Game mapToModel(GameUpdatedDTO gameUpdatedDTO);

    @Mapping(source = "title", target = "title")
    @Mapping(source = "image", target = "image")
    @Mapping(source = "logo", target = "logo")
    Game mapToModel(CreateGameDTO createGameDTO);
}
