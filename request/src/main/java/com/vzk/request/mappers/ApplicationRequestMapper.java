package com.vzk.request.mappers;

import com.vzk.request.models.ApplicationRequest;
import com.vzk.request.models.ContactRequest;
import com.vzk.request.services.ContactRequestService;
import com.vzk.request.services.impl.ContactRequestImpl;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.factory.Mappers;
import org.openapitools.model.ApplicationRequestDTO;
import org.openapitools.model.CreateApplicationRequestDTO;

import java.util.UUID;

import static com.vzk.request.mappers.ContactRequestMapper.CONTACT_REQUEST_MAPPER;

@Mapper
public interface ApplicationRequestMapper {
    ApplicationRequestMapper APPLICATION_REQUEST_MAPPER

            = Mappers.getMapper(ApplicationRequestMapper.class);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "contactRequest.id", target = "contactRequestId")
    @Mapping(source = "playerName", target = "playerName")
    @Mapping(source = "profileURL", target = "profileUrl")
    @Mapping(source = "maxRank", target = "maxRank")
    @Mapping(source = "birthday", target = "birthday")
    @Mapping(source = "countryOrigin", target = "countryOrigin")
    @Mapping(source = "appliedGame", target = "appliedGame")
    @Mapping(source = "appliedRole", target = "appliedRole")
    @Mapping(source = "description", target = "description")
    @Mapping(source = "gender", target = "gender")
    ApplicationRequestDTO mapToDTO(ApplicationRequest applicationRequest);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "contactRequestId", target = "contactRequest", qualifiedByName = "mapRequest")
    @Mapping(source = "playerName", target = "playerName")
    @Mapping(source = "profileUrl", target = "profileURL")
    @Mapping(source = "maxRank", target = "maxRank")
    @Mapping(source = "birthday", target = "birthday")
    @Mapping(source = "countryOrigin", target = "countryOrigin")
    @Mapping(source = "appliedGame", target = "appliedGame")
    @Mapping(source = "appliedRole", target = "appliedRole")
    @Mapping(source = "description", target = "description")
    @Mapping(source = "gender", target = "gender")
    ApplicationRequest mapToModel(ApplicationRequestDTO applicationRequestDTO);

    @Mapping(source = "contactRequestId", target = "contactRequest", qualifiedByName = "mapRequest")
    @Mapping(source = "playerName", target = "playerName")
    @Mapping(source = "profileUrl", target = "profileURL")
    @Mapping(source = "maxRank", target = "maxRank")
    @Mapping(source = "birthday", target = "birthday")
    @Mapping(source = "countryOrigin", target = "countryOrigin")
    @Mapping(source = "appliedGame", target = "appliedGame")
    @Mapping(source = "appliedRole", target = "appliedRole")
    @Mapping(source = "description", target = "description")
    @Mapping(source = "gender", target = "gender")
    ApplicationRequest mapToModel(CreateApplicationRequestDTO createApplicationRequestDTO);

    @Named("mapRequest")
    default ContactRequest mapRequest(UUID requestId) {
        ContactRequestService contactRequestService = new ContactRequestImpl();
        return CONTACT_REQUEST_MAPPER.mapToModel(contactRequestService.getContactRequestById(requestId));
    }
}
