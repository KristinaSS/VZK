package com.vzk.request.services;

import org.openapitools.model.ContactRequestDTO;
import org.openapitools.model.CreateContactRequestDTO;

import java.util.List;
import java.util.UUID;

public interface ContactRequestService {
    ContactRequestDTO createContactRequest (CreateContactRequestDTO createContactRequestDTO);
    List<ContactRequestDTO> getAllContactRequests ();
    ContactRequestDTO getContactRequestById(UUID id);
}
