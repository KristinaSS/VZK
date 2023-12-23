package com.vzk.events.services.impl;

import com.vzk.events.feign.GameClient;
import com.vzk.events.models.Result;
import com.vzk.events.repos.ResultRepository;
import com.vzk.events.services.EventService;
import com.vzk.events.services.ResultService;
import lombok.RequiredArgsConstructor;
import org.openapitools.model.CreatedResultDTO;
import org.openapitools.model.EventDTO;
import org.openapitools.model.GameDTO;
import org.openapitools.model.ResultDTO;
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

import static com.vzk.events.mappers.ResultMapper.RESULT_MAPPER;

@RequiredArgsConstructor
@Service
public class ResultServiceImpl implements ResultService {
    private ResultRepository resultRepository;
    private EventService eventService;

    @Autowired
    private GameClient gameClient;

    @Autowired
    public ResultServiceImpl(@Lazy ResultRepository resultRepository, @Lazy EventService eventService) {
        this.resultRepository = resultRepository;
        this.eventService = eventService;
    }


    @Override
    public ResultDTO createResult(CreatedResultDTO createdResultDTO) {
        EventDTO event = eventService.getEventById(createdResultDTO.getEventId());

        Result result = RESULT_MAPPER.mapToModel(createdResultDTO, event);
        result.setActive(true);
        Result saved = resultRepository.save(result);
        return RESULT_MAPPER.mapToDTO(saved);
    }

    @Override
    public boolean existsResultWithId(UUID eventId) {
        return resultRepository.existsByEvent_Id(eventId);
    }

    @Override
    public Page<ResultDTO> getAllActiveResults(PageRequest pageRequest, String filter) {
        LocalDateTime today = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");

        List<ResultDTO> activeResults = resultRepository.findAll().stream()
                .filter(result -> {
                    LocalDateTime eventDate = LocalDateTime.parse(result.getDateTime(), formatter);
                    return result.isActive() && (eventDate.isBefore(today));
                })
                .map(RESULT_MAPPER::mapToDTO)
                .sorted((resultDTO1, resultDTO2) -> compareResults(resultDTO1, resultDTO2, filter))
                .collect(Collectors.toList());

        int pageSize = pageRequest.getPageSize();
        int start = (int) pageRequest.getOffset();
        int end = Math.min((start + pageSize), activeResults.size());

        if (start >= activeResults.size()) {
            return new PageImpl<>(Collections.emptyList(), pageRequest, 0);
        }

        return new PageImpl<>(activeResults.subList(start, end), pageRequest, activeResults.size());
    }

    private int compareResults(ResultDTO resultDTO1, ResultDTO resultDTO2, String filter) {
        switch (filter) {
            case "latest":
                return resultDTO2.getDateTime().compareTo(resultDTO1.getDateTime());
            case "gASC":
                int gameTitleComparison = compareGameTitles(resultDTO1, resultDTO2);
                if (gameTitleComparison == 0) {
                    return resultDTO2.getDateTime().compareTo(resultDTO1.getDateTime());
                }
                return gameTitleComparison;
            case "gDSC":
                int reverseGameTitleComparison = -compareGameTitles(resultDTO1, resultDTO2);
                if (reverseGameTitleComparison == 0) {
                    return resultDTO2.getDateTime().compareTo(resultDTO1.getDateTime());
                }
                return reverseGameTitleComparison;
            default:
                return resultDTO1.getDateTime().compareTo(resultDTO2.getDateTime());
        }
    }


    private int compareGameTitles(ResultDTO resultDTO1, ResultDTO resultDTO2) {
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
