package com.vzk.account.feign;

import org.openapitools.model.RoleDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.UUID;

import static com.vzk.account.constants.Constants.*;

@FeignClient(name = ROLES_SERVICE_NAME, url = ROLES_SERVICE_BASE_URL)
public interface RolesClient {

    @GetMapping(ROLES_GET_ALL_ACTIVE_URL)
    List<RoleDTO> getRolesAllActive();

    @GetMapping(ROLES_GIVE_ACCOUNT_ROLE_URL)
    void giveAccountRole(
            @PathVariable("acc_id") UUID accountId,
            @PathVariable("role_id") UUID roleId,
            @RequestParam("acc_id") UUID accountId2,
            @RequestParam("role_id") UUID roleId2
    );

    @GetMapping(ROLES_DELETE_ACC_ROLE_URL)
    void deleteAccountRole(
            @PathVariable("acc_id") UUID accountId,
            @PathVariable("role_id") UUID roleId,
            @RequestParam("acc_id") UUID accountId2,
            @RequestParam("role_id") UUID roleId2
    );
}
