package com.vzk.events.services.impl;

import com.vzk.events.exceptions.EntityAlreadyDeactivatedException;
import com.vzk.events.exceptions.EntityNotFoundException;
import com.vzk.events.feign.GameClient;
import com.vzk.events.models.Event;
import com.vzk.events.repos.EventRepository;
import com.vzk.events.services.EventService;
import com.vzk.events.services.ResultService;
import lombok.RequiredArgsConstructor;
import org.openapitools.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import static com.vzk.events.mappers.EventMapper.EVENT_MAPPER;

@RequiredArgsConstructor
@Service
public class EventServiceImpl implements EventService {
    private static final String ENTITY = "Event";

    private EventRepository eventRepository;
    private ResultService resultService;

    @Autowired
    private GameClient gameClient;

    @Autowired
    public EventServiceImpl(@Lazy EventRepository eventRepository, @Lazy ResultService resultService) {
        this.eventRepository = eventRepository;
        this.resultService = resultService;
    }

    @Override
    public EventDTO createEvent(CreateEventDTO createEventDTO) {
        Event event = EVENT_MAPPER.mapToModel(createEventDTO);
        event.setActive(true);
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
    public Page<EventDTO> getAllActiveEvents(PageRequest pageRequest, String filter) {
        LocalDateTime today = LocalDateTime.now();

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");

        List<EventDTO> activeEvents = eventRepository.findAll().stream()
                .filter(event -> {
                    LocalDateTime eventDate = LocalDateTime.parse(event.getDate(), formatter);
                    LocalDateTime todayPast = today.minusHours(2);
                    createResultIfEventEnded(eventDate, todayPast, event);

                    return event.isActive() && (eventDate.isAfter(todayPast));
                })
                .map(EVENT_MAPPER::mapToDTO)
                .sorted((eventDTO1, eventDTO2) -> compareEvents(eventDTO1, eventDTO2, filter))
                .collect(Collectors.toList());

        int pageSize = pageRequest.getPageSize();
        int start = (int) pageRequest.getOffset();
        int end = Math.min((start + pageSize), activeEvents.size());

        if (start >= activeEvents.size()) {
            return new PageImpl<>(Collections.emptyList(), pageRequest, 0);
        }

        return new PageImpl<>(activeEvents.subList(start, end), pageRequest, activeEvents.size());
    }

    @Override
    public List<EventDTO> getAllEvents() {
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

    private void createResultIfEventEnded(LocalDateTime eventStartTime, LocalDateTime now, Event event) {
        if (eventStartTime.isBefore(now) && !resultService.existsResultWithId(event.getId())) {
            resultService.createResult(CreatedResultDTO.builder()
                    .enemyResult("?")
                    .teamResult("?")
                    .replayURL("?")
                    .eventId(event.getId())
                    .build());
        }
    }

    private int compareEvents(EventDTO resultDTO1, EventDTO resultDTO2, String filter) {
        switch (filter) {
            case "soonest":
                return resultDTO1.getDate().compareTo(resultDTO2.getDate());
            case "gASC":
                int gameTitleComparison = compareGameTitles(resultDTO1, resultDTO2);
                if (gameTitleComparison == 0) {
                    return resultDTO1.getDate().compareTo(resultDTO2.getDate());
                }
                return gameTitleComparison;
            case "gDSC":
                int reverseGameTitleComparison = -compareGameTitles(resultDTO1, resultDTO2);
                if (reverseGameTitleComparison == 0) {
                    return resultDTO1.getDate().compareTo(resultDTO2.getDate());
                }
                return reverseGameTitleComparison;
            default:
                return resultDTO2.getDate().compareTo(resultDTO1.getDate());
        }
    }

    private int compareGameTitles(EventDTO resultDTO1, EventDTO resultDTO2) {
        List<GameDTO> gameList = gameClient.getAllGames().getBody();
        GameDTO game1 = getGameById(resultDTO1.getGame().toString(), gameList);
        GameDTO game2 = getGameById(resultDTO2.getGame().toString(), gameList);
        return game1.getTitle().compareTo(game2.getTitle());
    }

    private GameDTO getGameById(String gameId, List<GameDTO> gameList) {
        return gameList.stream()
                .filter(gameDTO -> gameDTO.getId().toString().equals(gameId))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Game not found: " + gameId));
    }
}
