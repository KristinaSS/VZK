package com.vzk.request.controllers;

import org.openapitools.api.ContactRequestApi;
import org.openapitools.model.ContactRequestDTO;
import org.openapitools.model.CreateContactRequestDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class ContactRequestController implements ContactRequestApi {
    @Override
    public ResponseEntity<ContactRequestDTO> createContactRequest(CreateContactRequestDTO createContactRequestDTO) {
        return null;
    }

    @Override
    public ResponseEntity<List<ContactRequestDTO>> getAllContactRequests() {
        return null;
    }

    @Override
    public ResponseEntity<ContactRequestDTO> getContactRequestById(Integer request) {
        return null;
    }
}
