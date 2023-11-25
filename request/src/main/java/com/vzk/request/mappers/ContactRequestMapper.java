package com.vzk.request.mappers;

import com.vzk.request.models.ContactRequest;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import org.openapitools.model.ContactRequestDTO;
import org.openapitools.model.CreateContactRequestDTO;

@Mapper
public interface ContactRequestMapper {
    ContactRequestMapper CONTACT_REQUEST_MAPPER = Mappers.getMapper(ContactRequestMapper.class);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "email", target = "email")
    @Mapping(source = "consent", target = "isConsent")
    @Mapping(source = "subject", target = "subject")
    @Mapping(source = "message", target = "message")
    @Mapping(source = "applicationRequest", target = "isApplicationRequest")
    @Mapping(source = "timeCreated", target = "timeCreated")
    ContactRequestDTO mapToDTO(ContactRequest contactRequestZ);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "email", target = "email")
    @Mapping(source = "isConsent", target = "isConsent")
    @Mapping(source = "subject", target = "subject")
    @Mapping(source = "message", target = "message")
    @Mapping(source = "isApplicationRequest", target = "isApplicationRequest")
    @Mapping(source = "timeCreated", target = "timeCreated")
    ContactRequest mapToModel(ContactRequestDTO contactRequestDTO);

    @Mapping(source = "email", target = "email")
    @Mapping(source = "isConsent", target = "isConsent")
    @Mapping(source = "subject", target = "subject")
    @Mapping(source = "message", target = "message")
    @Mapping(source = "isApplicationRequest", target = "isApplicationRequest")
    @Mapping(source = "timeCreated", target = "timeCreated")
    @Mapping(target = "id", expression = "java(java.util.UUID.randomUUID())")
    ContactRequest mapToModel(CreateContactRequestDTO createContactRequestDTO);
}
