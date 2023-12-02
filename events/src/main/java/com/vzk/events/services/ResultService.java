package com.vzk.events.services;

import org.openapitools.model.CreatedResultDTO;
import org.openapitools.model.ResultDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import java.util.UUID;

public interface ResultService {
    ResultDTO createResult(CreatedResultDTO createdResultDTO);

    Page<ResultDTO> getAllActiveResults(PageRequest pageRequest);

    boolean existsResultWithId(UUID eventId);
}
