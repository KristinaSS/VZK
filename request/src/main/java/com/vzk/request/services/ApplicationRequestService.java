package com.vzk.request.services;

import org.openapitools.model.ApplicationRequestDTO;
import org.openapitools.model.CreateApplicationRequestDTO;

import java.util.List;
import java.util.UUID;

public interface ApplicationRequestService {
    ApplicationRequestDTO createApplicationRequest (CreateApplicationRequestDTO createApplicationRequestDTO);
    List<ApplicationRequestDTO> getAllApplicationRequests ();
    ApplicationRequestDTO getApplicationRequestById(UUID id);
}
