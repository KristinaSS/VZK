package com.vzk.request.services;

import org.openapitools.model.ContactRequestDTO;
import org.openapitools.model.CreateContactRequestDTO;

import java.util.List;

public interface ContactRequestService {
    ContactRequestDTO createContactRequest (CreateContactRequestDTO createContactRequestDTO);
    List<ContactRequestDTO> getAllContactRequests ();
    ContactRequestDTO getContactRequestById(int id);
}
