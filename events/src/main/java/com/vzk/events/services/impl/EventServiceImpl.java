package com.vzk.events.services.impl;

import com.vzk.events.exceptions.EntityAlreadyDeactivatedException;
import com.vzk.events.exceptions.EntityNotFoundException;
import com.vzk.events.models.Event;
import com.vzk.events.repos.EventRepository;
import com.vzk.events.services.EventService;
import org.openapitools.model.CreateEventDTO;
import org.openapitools.model.EventDTO;
import org.openapitools.model.EventDateDTO;
import org.openapitools.model.UpdateEventDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import static com.vzk.events.mappers.EventMapper.EVENT_MAPPER;

@Service
public class EventServiceImpl implements EventService {
    private static final String ENTITY = "Event";
    @Autowired
    private EventRepository eventRepository;

    @Override
    public EventDTO createEvent(CreateEventDTO createEventDTO) {
        Event event = EVENT_MAPPER.mapToModel(createEventDTO);
        event.setActive(true);
        event.setId(UUID.randomUUID());
        Event saved = eventRepository.save(event);
        return EVENT_MAPPER.mapToDTO(saved);
    }

    @Override
    public void deleteEvent(UUID id) {
        Event event = eventRepository.findById(id).orElseThrow(() -> new EntityNotFoundException(ENTITY, "id", "" + id));

        verifyIfArticleActive(event);

        event.setActive(false);
        eventRepository.save(event);
    }

    @Override
    public List<EventDTO> getAllActiveEvents() {
        return eventRepository.findAll().stream()
                .filter(Event::isActive)
                .map(EVENT_MAPPER::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<EventDTO> getALlEvents() {
        return eventRepository.findAll().stream()
                .map(EVENT_MAPPER::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<EventDTO> getAllEventsByDate(EventDateDTO dateDTO) {
        return eventRepository.findAll().stream()
                .filter(event -> event.isActive() && isDateBetween(dateDTO, event.getDate()))
                .map(EVENT_MAPPER::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public EventDTO getEventById(UUID id) {
        Event event = eventRepository.findById(id).orElseThrow(() -> new EntityNotFoundException(ENTITY, "id", "" + id));
        return EVENT_MAPPER.mapToDTO(event);
    }

    @Override
    public void updateEvent(UpdateEventDTO updateEventDTO) {
        Event event = EVENT_MAPPER.mapToModel(updateEventDTO);
        event.setActive(true);
        eventRepository.save(event);
    }

    private boolean isDateBetween(EventDateDTO dateDTO, String time) {
        LocalDateTime eventTime = LocalDateTime.parse(time);
        LocalDateTime fromTime = LocalDateTime.parse(dateDTO.getDateFrom());
        LocalDateTime toTime = LocalDateTime.parse(dateDTO.getDateTo());

        return (eventTime.isEqual(fromTime) || eventTime.isAfter(fromTime)) && (eventTime.isEqual(toTime) || eventTime.isBefore(toTime));
    }

    private void verifyIfArticleActive(Event event) {
        if (!event.isActive()) {
            throw new EntityAlreadyDeactivatedException(ENTITY, event.getId());
        }
    }
}
