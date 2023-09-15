package com.vzk.roles.services;

import org.openapitools.model.RoleDTO;

import java.util.List;
import java.util.UUID;

public interface AccountService {
    void deleteAccountRole(UUID accountId, UUID roleId);

    List<RoleDTO> getRolesForAccount (UUID accID);

    void giveRoleToAccount(UUID accountId, UUID roleId);
}
