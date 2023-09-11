package com.vzk.roles.services;

import org.openapitools.model.PermissionDTO;

import java.util.List;

public interface PermissionService {
    PermissionDTO createPermission(String name);
    void deletePermission(int id);
    List<PermissionDTO> getAllActivePermissions();
    List<PermissionDTO> getAllPermissions();
    PermissionDTO getPermissionById(int id);
}
