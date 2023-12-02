package com.vzk.events.mappers;

import com.vzk.events.models.Result;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import org.openapitools.model.CreatedResultDTO;
import org.openapitools.model.EventDTO;
import org.openapitools.model.ResultDTO;

@Mapper
public interface ResultMapper {

    ResultMapper RESULT_MAPPER = Mappers.getMapper(ResultMapper.class);

    @Mapping(target = "id", expression = "java(java.util.UUID.randomUUID())")
    @Mapping(source = "title", target = "title")
    @Mapping(source = "game", target = "game")
    @Mapping(source = "dateTime", target = "dateTime")
    @Mapping(source = "enemyResult", target = "enemyResult")
    @Mapping(source = "teamResult", target = "teamResult")
    @Mapping(source = "replayURL", target = "replayURL")
    @Mapping(source = "active", target = "isActive")
    @Mapping(source = "description", target = "description")
    @Mapping(source = "enemyLogoURL", target = "enemyLogoURL")
    ResultDTO mapToDTO(Result result);

    @Mapping(target = "id", expression = "java(java.util.UUID.randomUUID())")
    @Mapping(source = "event.name", target = "title")
    @Mapping(source = "event.game", target = "game")
    @Mapping(source = "event.date", target = "dateTime")
    @Mapping(source = "createdResultDTO.enemyResult", target = "enemyResult")
    @Mapping(source = "createdResultDTO.teamResult", target = "teamResult")
    @Mapping(source = "createdResultDTO.replayURL", target = "replayURL")
    @Mapping(source = "event.info", target = "description")
    @Mapping(source = "event.enemyLogo", target = "enemyLogoURL")
    @Mapping(source = "event", target = "event")
    Result mapToModel(CreatedResultDTO createdResultDTO, EventDTO event);

}

