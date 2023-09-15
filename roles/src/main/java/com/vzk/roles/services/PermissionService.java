package com.vzk.roles.services;

import org.openapitools.model.PermissionDTO;

import java.util.List;
import java.util.UUID;

public interface PermissionService {
    PermissionDTO createPermission(String name);
    void deletePermission(UUID id);
    List<PermissionDTO> getAllActivePermissions();
    List<PermissionDTO> getAllPermissions();
    PermissionDTO getPermissionById(UUID id);
}
