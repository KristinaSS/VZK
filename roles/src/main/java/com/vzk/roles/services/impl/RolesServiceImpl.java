package com.vzk.roles.services.impl;

import com.vzk.roles.exceptions.EntityAlreadyDeactivatedException;
import com.vzk.roles.exceptions.EntityAlreadyExists;
import com.vzk.roles.exceptions.EntityNotFoundException;
import com.vzk.roles.models.Permission;
import com.vzk.roles.models.Role;
import com.vzk.roles.models.RolePermission;
import com.vzk.roles.models.RolePermissionID;
import com.vzk.roles.repos.RolePermissionRepository;
import com.vzk.roles.repos.RoleRepository;
import com.vzk.roles.services.PermissionService;
import com.vzk.roles.services.RolesService;
import org.openapitools.model.PermissionDTO;
import org.openapitools.model.RoleDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import static com.vzk.roles.mappers.PermissionMapper.PERMISSION_MAPPER;
import static com.vzk.roles.mappers.RoleMapper.ROLE_MAPPER;

@Service
public class RolesServiceImpl implements RolesService {
    private static final String ENTITY = "Role";

    private static final String ENTITY_COMB = "RolePermission";

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PermissionService permissionService;

    @Autowired
    private RolePermissionRepository rolePermissionRepository;

    @Override
    public RoleDTO createRole(String name) {
        Role role = Role.builder()
                .name(name)
                .isActive(true)
                .build();
        role.setId(UUID.randomUUID());

        Role saved = roleRepository.save(role);
        return ROLE_MAPPER.mapToDTO(saved);
    }

    @Override
    public void deleteRole(UUID id) {
        Role role = findRole(id);

        if (!role.isActive()) {
            throw new EntityAlreadyDeactivatedException(ENTITY, role.getId());
        }

        role.setActive(false);
        roleRepository.save(role);
    }

    @Override
    public List<RoleDTO> getAllActiveRoles() {
        return roleRepository.findAll().stream()
                .filter(Role::isActive)
                .map(ROLE_MAPPER::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<RoleDTO> getAllRoles() {
        return roleRepository.findAll().stream()
                .map(ROLE_MAPPER::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public RoleDTO getRoleById(UUID id) {
        Role role = findRole(id);
        return ROLE_MAPPER.mapToDTO(role);
    }

    @Override
    public void giveRolePermission(UUID roleId, UUID permissionsId) {
        rolePermissionRepository.save(buildRolePermission(roleId, permissionsId));
    }

    @Override
    public List<PermissionDTO> getPermissionsByRoleId(UUID roleId) {
        return rolePermissionRepository.findAll().stream()
                .filter(rolePermission -> rolePermission.getRolePermissionID().getRole().getId().toString().equals(roleId.toString()))
                .map(rolePermission -> PERMISSION_MAPPER.mapToDTO(rolePermission.getRolePermissionID().getPermission()))
                .collect(Collectors.toList());
    }

    @Override
    public void deletePermissionToRole(UUID roleId, UUID permissionId) {
        rolePermissionRepository.delete(buildRolePermission(roleId, permissionId));
    }

    private Role findRole(UUID id) {
        return roleRepository.findById(id).orElseThrow(
                () -> new EntityNotFoundException(ENTITY, "id", "" + id));
    }

    private void verifyEntityIfExists(RolePermissionID rolePermissionID) {
        RolePermission id = rolePermissionRepository.findById(rolePermissionID).orElse(null);
        if (id != null) {
            throw new EntityAlreadyExists(
                    ENTITY_COMB,
                    "permission",
                    rolePermissionID.getRole().getId(),
                    rolePermissionID.getPermission().getId());
        }
    }

    private RolePermission buildRolePermission(UUID roleId, UUID permissionId) {
        Role role = findRole(roleId);
        PermissionDTO permissionDTO = permissionService.getPermissionById(permissionId);
        Permission permission = PERMISSION_MAPPER.mapToModel(permissionDTO);
        RolePermissionID rolePermissionID = RolePermissionID.builder().permission(permission).role(role).build();

        verifyEntityIfExists(rolePermissionID);

        return RolePermission.builder().rolePermissionID(rolePermissionID).build();
    }
}
