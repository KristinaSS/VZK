package com.vzk.security.feign;

import org.openapitools.model.PermissionDTO;
import org.openapitools.model.RoleDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.UUID;

@FeignClient(name = "roles-service", url = "http://localhost:8084")
public interface RolesClient {
    @GetMapping("/role/account/{id}")
    List<RoleDTO> getRolesByAccountId(@PathVariable("id") String id, @RequestParam("accountId") String accountId);

    @GetMapping("/role/{id}/permissions")
    List<PermissionDTO> getPermissionsByRoleId(@PathVariable("id") String id, @RequestParam("roleId") String roleId);

    @GetMapping("/role/account/{acc_id}/role/{role_id}")
    void giveAccountRole(
            @PathVariable("acc_id")UUID accountId,
            @PathVariable("role_id")UUID roleId,
            @RequestParam("acc_id")UUID accountId2,
            @RequestParam("role_id")UUID roleId2
    );
}

