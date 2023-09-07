package com.vzk.roles.controllers;

import org.openapitools.api.RolesApi;
import org.openapitools.model.RoleDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RoleController implements RolesApi {
    @Override
    public ResponseEntity<RoleDTO> createContactRequest(String body) {
        return null;
    }

    @Override
    public ResponseEntity<Void> deleteRole(Integer article) {
        return null;
    }

    @Override
    public ResponseEntity<List<RoleDTO>> getAllActiveRoles() {
        return null;
    }

    @Override
    public ResponseEntity<List<RoleDTO>> getAllRoles() {
        return null;
    }

    @Override
    public ResponseEntity<RoleDTO> getRoleById(Integer request) {
        return null;
    }
}
