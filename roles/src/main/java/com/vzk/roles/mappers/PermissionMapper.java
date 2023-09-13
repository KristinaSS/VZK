package com.vzk.roles.mappers;

import com.vzk.roles.models.Permission;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import org.openapitools.model.PermissionDTO;

@Mapper
public interface PermissionMapper {
    PermissionMapper PERMISSION_MAPPER = Mappers.getMapper(PermissionMapper.class);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "name", target = "name")
    @Mapping(source = "active", target = "isActive")
    PermissionDTO mapToDTO(Permission permission);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "name", target = "name")
    @Mapping(source = "isActive", target = "isActive")
    Permission mapToModel(PermissionDTO permissionDTO);
}
