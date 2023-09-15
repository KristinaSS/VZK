package com.vzk.events.services;

import org.openapitools.model.CreateEventDTO;
import org.openapitools.model.EventDTO;
import org.openapitools.model.EventDateDTO;
import org.openapitools.model.UpdateEventDTO;

import java.util.List;
import java.util.UUID;

public interface EventService {
    EventDTO createEvent(CreateEventDTO createEventDTO);

    void deleteEvent(UUID id);

    List<EventDTO> getAllActiveEvents();

    List<EventDTO> getALlEvents();

    List<EventDTO> getAllEventsByDate(EventDateDTO dateDTO);

    EventDTO getEventById(UUID event);

    void updateEvent(UpdateEventDTO updateEventDTO);
}
