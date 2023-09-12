package com.vzk.request.services.impl;

import com.vzk.request.exceptions.EntityNotFoundException;
import com.vzk.request.models.ApplicationRequest;
import com.vzk.request.repos.ApplicationRequestRepository;
import com.vzk.request.services.ApplicationRequestService;
import org.openapitools.model.ApplicationRequestDTO;
import org.openapitools.model.CreateApplicationRequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import static com.vzk.request.mappers.ApplicationRequestMapper.APPLICATION_REQUEST_MAPPER;

@Service
public class ApplicationRequestServiceImpl implements ApplicationRequestService {
    @Autowired
    private ApplicationRequestRepository applicationRequestRepository;

    private static final String ENTITY = "Application Request";

    @Override
    public ApplicationRequestDTO createApplicationRequest(CreateApplicationRequestDTO createApplicationRequestDTO) {
        ApplicationRequest applicationRequest = APPLICATION_REQUEST_MAPPER.mapToModel(createApplicationRequestDTO);
        ApplicationRequest saved = applicationRequestRepository.save(applicationRequest);
        return APPLICATION_REQUEST_MAPPER.mapToDTO(saved);
    }

    @Override
    public List<ApplicationRequestDTO> getAllApplicationRequests() {
        return applicationRequestRepository.findAll().stream()
                .map(APPLICATION_REQUEST_MAPPER::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public ApplicationRequestDTO getApplicationRequestById(int id) {
        ApplicationRequest applicationRequest = applicationRequestRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException(ENTITY, "id", "" + id));

        return APPLICATION_REQUEST_MAPPER.mapToDTO(applicationRequest);
    }
}
