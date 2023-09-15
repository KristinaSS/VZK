package com.vzk.roles.services.impl;

import com.vzk.roles.exceptions.EntityAlreadyDeactivatedException;
import com.vzk.roles.exceptions.EntityNotFoundException;
import com.vzk.roles.models.Permission;
import com.vzk.roles.repos.PermissionRepository;
import com.vzk.roles.services.PermissionService;
import org.openapitools.model.PermissionDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import static com.vzk.roles.mappers.PermissionMapper.PERMISSION_MAPPER;

@Service
public class PermissionsServiceImpl implements PermissionService {
    private static final String ENTITY = "Permission";

    @Autowired
    private PermissionRepository permissionRepository;

    @Override
    public PermissionDTO createPermission(String name) {
        Permission permission = Permission.builder()
                .name(name)
                .isActive(true)
                .build();

        Permission saved = permissionRepository.save(permission);
        return PERMISSION_MAPPER.mapToDTO(saved);
    }

    @Override
    public void deletePermission(UUID id) {
        Permission permission = findPermission(id);

        if (!permission.isActive()) {
            throw new EntityAlreadyDeactivatedException(ENTITY, permission.getId());
        }

        permission.setActive(false);
        permissionRepository.save(permission);
    }

    @Override
    public List<PermissionDTO> getAllActivePermissions() {
        return permissionRepository.findAll().stream()
                .filter(Permission::isActive)
                .map(PERMISSION_MAPPER::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<PermissionDTO> getAllPermissions() {
        return permissionRepository.findAll().stream()
                .map(PERMISSION_MAPPER::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public PermissionDTO getPermissionById(UUID id) {
        Permission permission = findPermission(id);
        return PERMISSION_MAPPER.mapToDTO(permission);
    }

    private Permission findPermission(UUID id){
        return permissionRepository.findById(id).orElseThrow(
                () -> new EntityNotFoundException(ENTITY, "id", "" + id));
    }
}
