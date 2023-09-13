package com.vzk.roles.mappers;

import com.vzk.roles.models.Role;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import org.openapitools.model.RoleDTO;

@Mapper
public interface RoleMapper {
    RoleMapper ROLE_MAPPER = Mappers.getMapper(RoleMapper.class);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "name", target = "name")
    @Mapping(source = "active", target = "isActive")
    RoleDTO mapToDTO(Role role);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "name", target = "name")
    @Mapping(source = "isActive", target = "isActive")
    Role mapToModel(RoleDTO roleDTO);
}
