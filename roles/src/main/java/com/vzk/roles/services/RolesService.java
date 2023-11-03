package com.vzk.roles.services;

import org.openapitools.model.PermissionDTO;
import org.openapitools.model.RoleDTO;

import java.util.List;
import java.util.UUID;

public interface RolesService {
    RoleDTO createRole(String name);

    void deleteRole(UUID id);

    List<RoleDTO> getAllActiveRoles();

    List<RoleDTO> getAllRoles();

    RoleDTO getRoleById(UUID id);

    void giveRolePermission(UUID roleId, UUID permissionsId);

    List<PermissionDTO> getPermissionsByRoleId(UUID roleId);

    void deletePermissionToRole(UUID roleId, UUID permissionId);
}
