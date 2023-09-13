package com.vzk.events.services;

import org.openapitools.model.CreateEventDTO;
import org.openapitools.model.EventDTO;
import org.openapitools.model.EventDateDTO;
import org.openapitools.model.UpdateEventDTO;

import java.util.List;

public interface EventService {
    EventDTO createEvent(CreateEventDTO createEventDTO);

    void deleteEvent(int id);

    List<EventDTO> getAllActiveEvents();

    List<EventDTO> getALlEvents();

    List<EventDTO> getAllEventsByDate(EventDateDTO dateDTO);

    EventDTO getEventById(int event);

    void updateEvent(UpdateEventDTO updateEventDTO);
}
