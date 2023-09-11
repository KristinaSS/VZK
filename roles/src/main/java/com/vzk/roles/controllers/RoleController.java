package com.vzk.roles.controllers;

import com.vzk.roles.services.RolesService;
import org.openapitools.api.RolesApi;
import org.openapitools.model.RoleDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RoleController implements RolesApi {
    @Autowired
    private RolesService rolesService;
    @Override
    public ResponseEntity<RoleDTO> createRole(String body) {
        return ResponseEntity.ok(rolesService.createRole(body));
    }

    @Override
    public ResponseEntity<Void> deleteRole(Integer article) {
        rolesService.deleteRole(article);
        return ResponseEntity.ok(null);
    }

    @Override
    public ResponseEntity<List<RoleDTO>> getAllActiveRoles() {
        return ResponseEntity.ok(rolesService.getAllActiveRoles());
    }

    @Override
    public ResponseEntity<List<RoleDTO>> getAllRoles() {
        return ResponseEntity.ok(rolesService.getAllRoles());
    }

    @Override
    public ResponseEntity<RoleDTO> getRoleById(Integer request) {
        return ResponseEntity.ok(rolesService.getRoleById(request));
    }
}
