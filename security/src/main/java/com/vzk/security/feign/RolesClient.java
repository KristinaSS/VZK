package com.vzk.security.feign;

import org.openapitools.model.PermissionDTO;
import org.openapitools.model.RoleDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@FeignClient(name = "roles-service", url = "http://localhost:8084")
public interface RolesClient {
    @GetMapping("/role/account/{id}")
    List<RoleDTO> getRolesByAccountId(@PathVariable("id") String id, @RequestParam("accountId") String accountId);

    @GetMapping("/role/{id}/permissions")
    List<PermissionDTO> getPermissionsByRoleId(@PathVariable("id") String id, @RequestParam("roleId") String roleId);
}

