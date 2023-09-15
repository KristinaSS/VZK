package com.vzk.request.controllers;

import com.vzk.request.services.ContactRequestService;
import org.openapitools.api.ContactRequestApi;
import org.openapitools.model.ContactRequestDTO;
import org.openapitools.model.CreateContactRequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;


@RestController
public class ContactRequestController implements ContactRequestApi {
    @Autowired
    private ContactRequestService contactRequestService;

    @Override
    public ResponseEntity<ContactRequestDTO> createContactRequest(CreateContactRequestDTO createContactRequestDTO) {
        return ResponseEntity.ok(contactRequestService.createContactRequest(createContactRequestDTO));
    }

    @Override
    public ResponseEntity<List<ContactRequestDTO>> getAllContactRequests() {
        return ResponseEntity.ok(contactRequestService.getAllContactRequests());
    }

    @Override
    public ResponseEntity<ContactRequestDTO> getContactRequestById(UUID request) {
        return ResponseEntity.ok(contactRequestService.getContactRequestById(request));
    }
}
