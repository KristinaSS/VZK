package com.vzk.roles.controllers;

import com.vzk.roles.services.RolesService;
import org.openapitools.api.RolesApi;
import org.openapitools.model.PermissionDTO;
import org.openapitools.model.RoleDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
public class RoleController implements RolesApi {
    @Autowired
    private RolesService rolesService;
    @Override //works
    public ResponseEntity<RoleDTO> createRole(String body) {
        return ResponseEntity.ok(rolesService.createRole(body));
    }

    @Override
    public ResponseEntity<Void> deletePermissionToRole(UUID roleId, UUID permissionId) {
        rolesService.deletePermissionToRole(roleId, permissionId);
        return ResponseEntity.ok(null);
    }

    @Override
    public ResponseEntity<Void> deleteRole(UUID article) {
        rolesService.deleteRole(article);
        return ResponseEntity.ok(null);
    }

    @Override //works
    public ResponseEntity<List<RoleDTO>> getAllActiveRoles() {
        return ResponseEntity.ok(rolesService.getAllActiveRoles());
    }

    @Override //works
    public ResponseEntity<List<RoleDTO>> getAllRoles() {
        return ResponseEntity.ok(rolesService.getAllRoles());
    }

    @Override //works
    public ResponseEntity<List<PermissionDTO>> getPermissionsByRoleId(UUID roleId) {
        return ResponseEntity.ok(rolesService.getPermissionsByRoleId(roleId));
    }

    @Override //works
    public ResponseEntity<RoleDTO> getRoleById(UUID request) {
        return ResponseEntity.ok(rolesService.getRoleById(request));
    }

    @Override //works
    public ResponseEntity<Void> giveRolePermission(UUID roleId, UUID permissionsId) {
        rolesService.giveRolePermission(roleId, permissionsId);
        return ResponseEntity.ok(null);
    }
}
