package com.vzk.request.services.impl;

import com.vzk.request.exceptions.EntityNotFoundException;
import com.vzk.request.models.ContactRequest;
import com.vzk.request.repos.ContactRequestRepository;
import com.vzk.request.services.ContactRequestService;
import org.openapitools.model.ContactRequestDTO;
import org.openapitools.model.CreateContactRequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import static com.vzk.request.mappers.ContactRequestMapper.CONTACT_REQUEST_MAPPER;

@Service
public class ContactRequestImpl implements ContactRequestService {
    @Autowired
    private ContactRequestRepository contactRequestRepository;

    private static final String ENTITY = "Contact Request";

    @Override
    public ContactRequestDTO createContactRequest(CreateContactRequestDTO createContactRequestDTO) {
        ContactRequest contactRequest = CONTACT_REQUEST_MAPPER.mapToModel(createContactRequestDTO);
        contactRequest.setId(UUID.randomUUID());

        ContactRequest saved = contactRequestRepository.save(contactRequest);
        return CONTACT_REQUEST_MAPPER.mapToDTO(saved);
    }

    @Override
    public List<ContactRequestDTO> getAllContactRequests() {
        return contactRequestRepository.findAll().stream()
                .map(CONTACT_REQUEST_MAPPER::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public ContactRequestDTO getContactRequestById(UUID id) {
        ContactRequest contactRequest = contactRequestRepository.findById(id)
                .orElseThrow(()-> new EntityNotFoundException(ENTITY, "id", ""+id));

        return CONTACT_REQUEST_MAPPER.mapToDTO(contactRequest);
    }
}
