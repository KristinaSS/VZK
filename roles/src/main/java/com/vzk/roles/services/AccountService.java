package com.vzk.roles.services;

import org.openapitools.model.RoleDTO;

import java.util.List;

public interface AccountService {
    void deleteAccountRole(int accountId, int roleId);

    List<RoleDTO> getRolesForAccount (int accID);

    void giveRoleToAccount(int accountId, int roleId);
}
