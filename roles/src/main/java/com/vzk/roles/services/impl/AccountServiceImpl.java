package com.vzk.roles.services.impl;

import com.vzk.roles.exceptions.EntityAlreadyExists;
import com.vzk.roles.exceptions.EntityNotFoundException;
import com.vzk.roles.models.Role;
import com.vzk.roles.models.RoleAccount;
import com.vzk.roles.models.RoleAccountID;
import com.vzk.roles.repos.RoleAccountRepository;
import com.vzk.roles.repos.RoleRepository;
import com.vzk.roles.services.AccountService;
import org.openapitools.model.RoleDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import static com.vzk.roles.mappers.RoleMapper.ROLE_MAPPER;

@Service
public class AccountServiceImpl implements AccountService {
    private static final String ENTITY = "Role";

    private static final String ENTITY_COMB = "RoleAccount";

    @Autowired
    private RoleAccountRepository roleAccountRepository;

    @Autowired
    RoleRepository roleRepository;

    @Override
    public void deleteAccountRole(int accountId, int roleId) {
        roleAccountRepository.delete(buildRoleAccount(roleId, accountId));
    }

    @Override
    public List<RoleDTO> getRolesForAccount(int accID) {
        return roleAccountRepository.findAll().stream()
                .filter(roleAccount -> Integer.parseInt(roleAccount.getRoleAccountID().getAccountId()) == accID)
                .map(roleAccount -> ROLE_MAPPER.mapToDTO(roleAccount.getRoleAccountID().getRole()))
                .collect(Collectors.toList());
    }

    @Override
    public void giveRoleToAccount(int accountId, int roleId) {
        roleAccountRepository.save(buildRoleAccount(roleId, accountId));
    }

    private Role findRole(int id) {
        return roleRepository.findById(id).orElseThrow(
                () -> new EntityNotFoundException(ENTITY, "id", "" + id));
    }

    private void verifyEntityIfExists(RoleAccountID roleAccountID) {
        roleAccountRepository.findById(roleAccountID).orElseThrow(() ->
                new EntityAlreadyExists(
                        ENTITY_COMB,
                        "account",
                        roleAccountID.getRole().getId(),
                        Integer.parseInt(roleAccountID.getAccountId()))
        );
    }

    private RoleAccount buildRoleAccount(int roleId, int accId) {
        Role role = findRole(roleId);
        RoleAccountID roleAccountID = RoleAccountID.builder().role(role).accountId(String.valueOf(accId)).build();

        verifyEntityIfExists(roleAccountID);

        return RoleAccount.builder().roleAccountID(roleAccountID).build();
    }
}
