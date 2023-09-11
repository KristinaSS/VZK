package com.vzk.roles.services;

import org.openapitools.model.RoleDTO;

import java.util.List;

public interface RolesService {
    RoleDTO createRole(String name);

    void deleteRole(int id);

    List<RoleDTO> getAllActiveRoles();

    List<RoleDTO> getAllRoles();

    RoleDTO getRoleById(int id);
}
