package com.vzk.request.mappers;

import com.vzk.request.models.ApplicationRequest;
import com.vzk.request.models.ContactRequest;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import org.openapitools.model.ApplicationRequestDTO;
import org.openapitools.model.CreateApplicationRequestDTO;

@Mapper
public interface ApplicationRequestMapper {
    ApplicationRequestMapper APPLICATION_REQUEST_MAPPER

            = Mappers.getMapper(ApplicationRequestMapper.class);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "contactRequest.id", target = "contactRequestId")
    @Mapping(source = "applicationType", target = "applicationType")
    @Mapping(source = "profileURL", target = "profileUrl")
    @Mapping(source = "maxRank", target = "maxRank")
    @Mapping(source = "birthday", target = "birthday")
    @Mapping(source = "countryOrigin", target = "countryOrigin")
    @Mapping(source = "appliedGame", target = "appliedGame")
    @Mapping(source = "appliedRole", target = "appliedRole")
    @Mapping(source = "description", target = "description")
    @Mapping(source = "gender", target = "gender")
    ApplicationRequestDTO mapToDTO(ApplicationRequest applicationRequest);

    @Mapping(source = "applicationRequestDTO.id", target = "id")
    @Mapping(source = "contactRequest", target = "contactRequest")
    @Mapping(source = "applicationRequestDTO.applicationType", target = "applicationType")
    @Mapping(source = "applicationRequestDTO.profileUrl", target = "profileURL")
    @Mapping(source = "applicationRequestDTO.maxRank", target = "maxRank")
    @Mapping(source = "applicationRequestDTO.birthday", target = "birthday")
    @Mapping(source = "applicationRequestDTO.countryOrigin", target = "countryOrigin")
    @Mapping(source = "applicationRequestDTO.appliedGame", target = "appliedGame")
    @Mapping(source = "applicationRequestDTO.appliedRole", target = "appliedRole")
    @Mapping(source = "applicationRequestDTO.description", target = "description")
    @Mapping(source = "applicationRequestDTO.gender", target = "gender")
    ApplicationRequest mapToModel(ApplicationRequestDTO applicationRequestDTO, ContactRequest contactRequest);

    @Mapping(source = "contactRequest", target = "contactRequest")
    @Mapping(source = "applicationRequestDTO.applicationType", target = "applicationType")
    @Mapping(source = "applicationRequestDTO.profileUrl", target = "profileURL")
    @Mapping(source = "applicationRequestDTO.maxRank", target = "maxRank")
    @Mapping(source = "applicationRequestDTO.birthday", target = "birthday")
    @Mapping(source = "applicationRequestDTO.countryOrigin", target = "countryOrigin")
    @Mapping(source = "applicationRequestDTO.appliedGame", target = "appliedGame")
    @Mapping(source = "applicationRequestDTO.appliedRole", target = "appliedRole")
    @Mapping(source = "applicationRequestDTO.description", target = "description")
    @Mapping(source = "applicationRequestDTO.gender", target = "gender")
    @Mapping(target = "id", expression = "java(java.util.UUID.randomUUID())")
    ApplicationRequest mapToModel(CreateApplicationRequestDTO applicationRequestDTO, ContactRequest contactRequest);
}
