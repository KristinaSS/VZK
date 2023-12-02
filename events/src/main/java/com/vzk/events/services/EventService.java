package com.vzk.events.services;

import org.openapitools.model.CreateEventDTO;
import org.openapitools.model.EventDTO;
import org.openapitools.model.EventDateDTO;
import org.openapitools.model.UpdateEventDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import java.util.List;
import java.util.UUID;

public interface EventService {
    EventDTO createEvent(CreateEventDTO createEventDTO);

    void deleteEvent(UUID id);

    Page<EventDTO> getAllActiveEvents(PageRequest pageRequest);

    List<EventDTO> getAllEvents();

    List<EventDTO> getAllEventsByDate(EventDateDTO dateDTO);

    EventDTO getEventById(UUID event);

    void updateEvent(UpdateEventDTO updateEventDTO);
}
