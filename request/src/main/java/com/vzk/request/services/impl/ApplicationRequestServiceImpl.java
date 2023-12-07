package com.vzk.request.services.impl;

import com.vzk.request.exceptions.EntityNotFoundException;
import com.vzk.request.models.ApplicationRequest;
import com.vzk.request.models.ContactRequest;
import com.vzk.request.repos.ApplicationRequestRepository;
import com.vzk.request.services.ApplicationRequestService;
import com.vzk.request.services.ContactRequestService;
import jakarta.persistence.EntityExistsException;
import org.openapitools.model.ApplicationRequestDTO;
import org.openapitools.model.ContactRequestDTO;
import org.openapitools.model.CreateApplicationRequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import static com.vzk.request.mappers.ApplicationRequestMapper.APPLICATION_REQUEST_MAPPER;
import static com.vzk.request.mappers.ContactRequestMapper.CONTACT_REQUEST_MAPPER;

@Service
public class ApplicationRequestServiceImpl implements ApplicationRequestService {
    @Autowired
    private ApplicationRequestRepository applicationRequestRepository;

    @Autowired
    private ContactRequestService contactRequestService;

    private static final String ENTITY = "Application Request";

    @Override
    public ApplicationRequestDTO createApplicationRequest(CreateApplicationRequestDTO createApplicationRequestDTO) {
        checkApplicationWithGivenContactRequestExists(createApplicationRequestDTO.getContactRequestId());

        ContactRequestDTO contactRequestDTO = contactRequestService.getContactRequestById(createApplicationRequestDTO.getContactRequestId());
        ContactRequest contactRequest = CONTACT_REQUEST_MAPPER.mapToModel(contactRequestDTO);
        ApplicationRequest applicationRequest = APPLICATION_REQUEST_MAPPER.mapToModel(createApplicationRequestDTO, contactRequest);

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
    public ApplicationRequestDTO getApplicationRequestById(UUID id) {
        ApplicationRequest applicationRequest = applicationRequestRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException(ENTITY, "id", "" + id));

        return APPLICATION_REQUEST_MAPPER.mapToDTO(applicationRequest);
    }

    private void checkApplicationWithGivenContactRequestExists(UUID contactRequestId) {
        if (this.applicationRequestRepository.existsByContactRequest_Id(contactRequestId)) {
            throw new EntityExistsException(ENTITY + " exists with contact request with id: " + contactRequestId.toString());
        }
    }
}
