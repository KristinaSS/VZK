package com.vzk.security.feign;

import org.openapitools.model.PermissionDTO;
import org.openapitools.model.RoleDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.UUID;

import static com.vzk.security.utils.Constants.*;

@FeignClient(name = ROLES_SERVICE_NAME, url = ROLES_SERVICE_BASE_URL)
public interface RolesClient {
    @GetMapping(ROLES_GET_ROLES_BY_ACC_ID_URL)
    List<RoleDTO> getRolesByAccountId(@PathVariable("id") UUID id, @RequestParam("accountId") UUID accountId);

    @GetMapping(ROLES_GET_PERMISSION_BY_ROLE_ID_URL)
    List<PermissionDTO> getPermissionsByRoleId(@PathVariable("id") String id, @RequestParam("roleId") String roleId);

    @GetMapping(ROLES_GIVE_ACCOUNT_ROLE_URL)
    void giveAccountRole(
            @PathVariable("acc_id") UUID accountId,
            @PathVariable("role_id") UUID roleId,
            @RequestParam("acc_id") UUID accountId2,
            @RequestParam("role_id") UUID roleId2
    );
}

