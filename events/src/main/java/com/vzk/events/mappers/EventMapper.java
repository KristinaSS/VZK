package com.vzk.events.mappers;

import com.vzk.events.models.Event;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import org.openapitools.model.CreateEventDTO;
import org.openapitools.model.EventDTO;
import org.openapitools.model.UpdateEventDTO;

@Mapper
public interface EventMapper {
    EventMapper EVENT_MAPPER = Mappers.getMapper(EventMapper.class);
    @Mapping(source = "id", target = "id")
    @Mapping(source = "name", target = "name")
    @Mapping(source = "info", target = "info")
    @Mapping(source = "date", target = "date")
    @Mapping(source = "active", target = "isActive")
    EventDTO mapToDTO(Event event);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "name", target = "name")
    @Mapping(source = "info", target = "info")
    @Mapping(source = "date", target = "date")
    @Mapping(source = "isActive", target = "active")
    Event mapToModel(EventDTO eventDTO);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "name", target = "name")
    @Mapping(source = "info", target = "info")
    @Mapping(source = "date", target = "date")
    Event mapToModel(UpdateEventDTO updateEventDTO);

    @Mapping(source = "name", target = "name")
    @Mapping(source = "info", target = "info")
    @Mapping(source = "date", target = "date")
    @Mapping(target = "id", expression = "java(java.util.UUID.randomUUID())")
    Event mapToModel(CreateEventDTO createEventDTO);
}
