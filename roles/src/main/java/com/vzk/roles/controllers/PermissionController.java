package com.vzk.roles.controllers;

import org.openapitools.api.PermissionsApi;
import org.openapitools.model.PermissionDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PermissionController implements PermissionsApi {
    @Override
    public ResponseEntity<PermissionDTO> createPermission(String body) {
        return null;
    }

    @Override
    public ResponseEntity<Void> deleteRole(Integer article) {
        return null;
    }

    @Override
    public ResponseEntity<List<PermissionDTO>> getAllActivePermissions() {
        return null;
    }

    @Override
    public ResponseEntity<List<PermissionDTO>> getAllPermissions() {
        return null;
    }

    @Override
    public ResponseEntity<PermissionDTO> getPermissionById(Integer request) {
        return null;
    }
}
