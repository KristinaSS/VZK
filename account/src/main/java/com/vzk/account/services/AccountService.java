package com.vzk.account.services;

import org.openapitools.model.*;

import java.util.List;

public interface AccountService {
    AccountDTO createAccount(CreateAccountDTO createAccountDTO);

    void deleteAccount(String id);

    AccountDTO getAccountByEmail(String email);

    AccountDTO getAccountById(String id);

    List<AccountDTO> getAllAccounts();

    List<AccountDTO> getAllActiveAccounts();

    void updateAccountAdmin(UpdateAccountAdminDTO updateAccountDTO);

    ShortAccountDTO getShortAccountByEmail(String email);

    void updateAccountUser(UpdateAccountUserDTO updateAccountUserDTO);
}
