package com.vzk.account.services;

import org.openapitools.model.AccountDTO;
import org.openapitools.model.CreateAccountDTO;
import org.openapitools.model.UpdateAccountDTO;

import java.util.List;

public interface AccountService {
    AccountDTO createAccount(CreateAccountDTO createAccountDTO);

    void deleteAccount(String id);

    AccountDTO getAccountByEmail(String email);

    AccountDTO getAccountById(String id);

    List<AccountDTO> getAllAccounts();

    List<AccountDTO> getAllActiveAccounts();

    void updateAccount(UpdateAccountDTO updateAccountDTO);
}
