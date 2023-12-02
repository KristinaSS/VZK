package com.vzk.events.controller;

import com.vzk.events.services.ResultService;
import org.openapitools.api.ResultApi;
import org.openapitools.model.CreatedResultDTO;
import org.openapitools.model.ResultDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
public class ResultController implements ResultApi {

    @Autowired
    private ResultService resultService;

    @Override
    public ResponseEntity<ResultDTO> createResult(CreatedResultDTO createdResultDTO) {
        return ResponseEntity.ok(resultService.createResult(createdResultDTO));
    }

    @Override
    public ResponseEntity<List<ResultDTO>> getAllActiveEvents(Integer page) {
        int pageSize = 8;
        PageRequest pageRequest = PageRequest.of(page, pageSize);
        return ResponseEntity.ok(resultService.getAllActiveResults(pageRequest).getContent());
    }
}
