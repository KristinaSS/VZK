package com.vzk.request.mappers;

import com.vzk.request.models.ApplicationRequest;
import com.vzk.request.models.ContactRequest;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.factory.Mappers;
import org.openapitools.model.ApplicationRequestDTO;
import org.openapitools.model.CreateApplicationRequestDTO;

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
    @Mapping(source = "contactRequestId", target = "contactRequest", qualifiedByName = "mapCaptain")
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

    @Mapping(source = "contactRequestId", target = "contactRequest", qualifiedByName = "mapCaptain")
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

    @Named("mapCaptain")
    default ContactRequest mapRequest(int requestId) {
        //todo add mapping logic
        return ContactRequest.builder().build();
    }
}
