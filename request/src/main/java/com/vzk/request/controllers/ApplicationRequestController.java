package com.vzk.request.controllers;

import com.vzk.request.services.ApplicationRequestService;
import org.openapitools.api.ApplicationRequestApi;
import org.openapitools.model.ApplicationRequestDTO;
import org.openapitools.model.CreateApplicationRequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ApplicationRequestController implements ApplicationRequestApi {
    @Autowired
    private ApplicationRequestService applicationRequestService;
    @Override
    public ResponseEntity<ApplicationRequestDTO> createApplicationRequest(CreateApplicationRequestDTO createApplicationRequestDTO) {
        return ResponseEntity.ok(applicationRequestService.createApplicationRequest(createApplicationRequestDTO));
    }

    @Override
    public ResponseEntity<List<ApplicationRequestDTO>> getAllApplicationRequests() {
        return ResponseEntity.ok(applicationRequestService.getAllApplicationRequests());
    }

    @Override
    public ResponseEntity<ApplicationRequestDTO> getApplicationRequestById(Integer request) {
        return ResponseEntity.ok(applicationRequestService.getApplicationRequestById(request));
    }
}
