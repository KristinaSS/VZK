package com.vzk.security.feign;

import org.openapitools.model.AccountDTO;
import org.openapitools.model.CreateAccountDTO;
import org.openapitools.model.UpdateAccountDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import static com.vzk.security.utils.Constants.*;

@FeignClient(name = ACCOUNT_SERVICE_NAME, url = ACCOUNT_SERVICE_BASE_URL)
public interface AccountClient {

    @GetMapping(ACCOUNT_GET_ACCOUNT_BY_EMAIL_URL)
    ResponseEntity<AccountDTO> getAccountByEmail(
            @RequestParam("Account") String account,
            @RequestParam("email") String email
    );

    @PostMapping(ACCOUNT_CREATE_ACCOUNT_URL)
    ResponseEntity<AccountDTO> createAccount(@RequestBody CreateAccountDTO createAccountDTO);

    @PostMapping(ACCOUNT_UPDATE_ACCOUNT_URL)
    ResponseEntity<AccountDTO> updateAccount(@RequestBody UpdateAccountDTO updateAccountDTO);
}

