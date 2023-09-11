package com.vzk.roles.services.impl;

import com.vzk.roles.exceptions.EntityAlreadyDeactivatedException;
import com.vzk.roles.exceptions.EntityNotFoundException;
import com.vzk.roles.models.Role;
import com.vzk.roles.repos.RoleRepository;
import com.vzk.roles.services.RolesService;
import org.openapitools.model.RoleDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import static com.vzk.roles.mappers.RoleMapper.ROLE_MAPPER;

@Service
public class RolesServiceImpl implements RolesService {
    private static final String ENTITY = "Role";

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public RoleDTO createRole(String name) {
        Role role = Role.builder()
                .name(name)
                .isActive(true)
                .build();

        Role saved = roleRepository.save(role);
        return ROLE_MAPPER.mapToDTO(saved);
    }

    @Override
    public void deleteRole(int id) {
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
    public RoleDTO getRoleById(int id) {
        Role role = findRole(id);
        return ROLE_MAPPER.mapToDTO(role);
    }

    private Role findRole(int id) {
        return roleRepository.findById(id).orElseThrow(
                () -> new EntityNotFoundException(ENTITY, "id", "" + id));
    }
}
