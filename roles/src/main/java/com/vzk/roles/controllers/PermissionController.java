package com.vzk.roles.controllers;

import com.vzk.roles.services.PermissionService;
import org.openapitools.api.PermissionsApi;
import org.openapitools.model.PermissionDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
public class PermissionController implements PermissionsApi {
    @Autowired
    private PermissionService permissionService;
    @Override
    public ResponseEntity<PermissionDTO> createPermission(String body) {
        return ResponseEntity.ok(permissionService.createPermission(body));
    }

    @Override
    public ResponseEntity<Void> deletePermission(UUID permission) {
        permissionService.deletePermission(permission);
        return ResponseEntity.ok(null);
    }

    @Override
    public ResponseEntity<List<PermissionDTO>> getAllActivePermissions() {
        return ResponseEntity.ok(permissionService.getAllActivePermissions());
    }

    @Override
    public ResponseEntity<List<PermissionDTO>> getAllPermissions() {
        return ResponseEntity.ok(permissionService.getAllPermissions());
    }

    @Override
    public ResponseEntity<PermissionDTO> getPermissionById(UUID permissionId) {
        return ResponseEntity.ok(permissionService.getPermissionById(permissionId));
    }
}
