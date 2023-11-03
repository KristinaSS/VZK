package com.vzk.security.feign;

import org.openapitools.model.AccountDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "account-service", url = "http://localhost:8080")
public interface AccountClient {

    @GetMapping("/account/email/{email}")
    AccountDTO getAccountByEmail(
            @RequestParam("Account") String account,
            @RequestParam("email") String email
    );
}

