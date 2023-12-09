package com.vzk.events.services.impl;

import com.vzk.events.models.Result;
import com.vzk.events.repos.ResultRepository;
import com.vzk.events.services.EventService;
import com.vzk.events.services.ResultService;
import lombok.RequiredArgsConstructor;
import org.openapitools.model.CreatedResultDTO;
import org.openapitools.model.EventDTO;
import org.openapitools.model.ResultDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
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
    public Page<ResultDTO> getAllActiveResults(PageRequest pageRequest) {
        LocalDateTime today = LocalDateTime.now();

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");

        List<ResultDTO> activeResults = resultRepository.findAll().stream()
                .filter(result -> {
                    LocalDateTime eventDate = LocalDateTime.parse(result.getDateTime(), formatter);
                    return result.isActive() && (eventDate.isBefore(today));
                })
                .map(RESULT_MAPPER::mapToDTO)
                .sorted(Comparator.comparing(ResultDTO::getDateTime).reversed())
                .collect(Collectors.toList());

        int pageSize = pageRequest.getPageSize();
        int start = (int) pageRequest.getOffset();
        int end = Math.min((start + pageSize), activeResults.size());

        if (start >= activeResults.size()) {
            return new PageImpl<>(Collections.emptyList(), pageRequest, 0);
        }

        return new PageImpl<>(activeResults.subList(start, end), pageRequest, activeResults.size());
    }

    @Override
    public boolean existsResultWithId(UUID eventId) {
        return resultRepository.existsByEvent_Id(eventId);
    }
}
