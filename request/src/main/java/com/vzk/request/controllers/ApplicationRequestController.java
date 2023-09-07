package com.vzk.request.controllers;

import org.openapitools.api.ApplicationRequestApi;
import org.openapitools.model.ApplicationRequestDTO;
import org.openapitools.model.CreateApplicationRequestDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ApplicationRequestController implements ApplicationRequestApi {
    @Override
    public ResponseEntity<ApplicationRequestDTO> createApplicationRequest(CreateApplicationRequestDTO createApplicationRequestDTO) {
        return null;
    }

    @Override
    public ResponseEntity<List<ApplicationRequestDTO>> getAllApplicationRequests() {
        return null;
    }

    @Override
    public ResponseEntity<ApplicationRequestDTO> getApplicationRequestById(Integer request) {
        return null;
    }
}
