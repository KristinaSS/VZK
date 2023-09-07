package com.vzk.events;

import org.openapitools.api.EventApi;
import org.openapitools.model.CreateEventDTO;
import org.openapitools.model.EventDTO;
import org.openapitools.model.EventDateDTO;
import org.openapitools.model.UpdateEventDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EventController implements EventApi {
    @Override
    public ResponseEntity<EventDTO> createEvent(CreateEventDTO createEventDTO) {
        return null;
    }

    @Override
    public ResponseEntity<Void> deleteEvent(Integer event) {
        return null;
    }

    @Override
    public ResponseEntity<List<EventDTO>> getAllActiveEvents() {
        return null;
    }

    @Override
    public ResponseEntity<List<EventDTO>> getAllEvents() {
        return null;
    }

    @Override
    public ResponseEntity<List<EventDTO>> getAllEventsByDate(EventDateDTO eventDateDTO) {
        return null;
    }

    @Override
    public ResponseEntity<EventDTO> getEventById(Integer event) {
        return null;
    }

    @Override
    public ResponseEntity<Void> updateEvent(EventDTO updatedEvent, UpdateEventDTO updateEventDTO) {
        return null;
    }
}
