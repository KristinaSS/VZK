package com.vzk.events.controller;

import com.vzk.events.services.EventService;
import org.openapitools.api.EventApi;
import org.openapitools.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
public class EventController implements EventApi {

    @Autowired
    private EventService eventService;

    @Override //works
    public ResponseEntity<EventDTO> createEvent(CreateEventDTO createEventDTO) {
        return ResponseEntity.ok(eventService.createEvent(createEventDTO));
    }

    @Override
    public ResponseEntity<Void> deleteEvent(UUID event) {
        eventService.deleteEvent(event);
        return ResponseEntity.ok(null);
    }

    @Override
    public ResponseEntity<List<EventDTO>> getAllActiveEvents(FilterDTO filterDTO, Integer page) {
        int pageSize = 8;
        PageRequest pageRequest = PageRequest.of(page, pageSize);
        return ResponseEntity.ok(eventService.getAllActiveEvents(pageRequest, filterDTO.getFilter()).getContent());
    }

    @Override //works
    public ResponseEntity<List<EventDTO>> getAllEvents() {
        return ResponseEntity.ok(eventService.getAllEvents());
    }

    @Override
    public ResponseEntity<List<EventDTO>> getAllEventsByDate(EventDateDTO eventDateDTO) {
        return ResponseEntity.ok(eventService.getAllEventsByDate(eventDateDTO));
    }

    @Override
    public ResponseEntity<EventDTO> getEventById(UUID event) {
        return ResponseEntity.ok(eventService.getEventById(event));
    }

    @Override
    public ResponseEntity<Void> updateEvent(UpdateEventDTO updateEventDTO) {
        eventService.updateEvent(updateEventDTO);
        return ResponseEntity.ok(null);
    }
}
