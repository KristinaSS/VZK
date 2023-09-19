package com.vzk.account.services.impl;

import com.vzk.account.exceptions.EmailUnavailableException;
import com.vzk.account.exceptions.EntityAlreadyDeactivatedException;
import com.vzk.account.exceptions.EntityNotFoundException;
import com.vzk.account.models.Account;
import com.vzk.account.repos.AccountRepository;
import com.vzk.account.services.AccountService;
import org.openapitools.model.AccountDTO;
import org.openapitools.model.CreateAccountDTO;
import org.openapitools.model.UpdateAccountDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import static com.vzk.account.mapper.AccountMapper.ACCOUNT_MAPPER;

@Service
public class AccountServiceImpl implements AccountService {
    @Autowired
    private AccountRepository accountRepository;

    private static final String ENTITY = "account";

    @Override
    public AccountDTO createAccount(CreateAccountDTO createAccountDTO) {
        Account createdAccount = ACCOUNT_MAPPER.mapToModel(createAccountDTO);
        createdAccount.setActive(true);

        //check if email available
        verifyEmailUnique(createdAccount.getEmail());
        createdAccount.setId(UUID.randomUUID());

        Account savedAccount = accountRepository.save(createdAccount);
        return ACCOUNT_MAPPER.mapToDTO(savedAccount);
    }

    @Override
    public void deleteAccount(String accountId) {
        Account account = findAccount(UUID.fromString(accountId));

        //verify if deactivated
        verifyIfAccountActive(account);

        account.setActive(false);
        accountRepository.save(account);
    }

    @Override
    public AccountDTO getAccountByEmail(String email) {
        Account account = accountRepository.findAccountByEmail(email);
        if (account == null) {
            throw new EntityNotFoundException(ENTITY, "email", email);
        }
        return ACCOUNT_MAPPER.mapToDTO(account);
    }

    public AccountDTO getAccountById(String id) {
        Account account = findAccount(UUID.fromString(id));
        return ACCOUNT_MAPPER.mapToDTO(account);
    }

    @Override
    public List<AccountDTO> getAllAccounts() {
        return accountRepository.findAll().stream()
                .map(ACCOUNT_MAPPER::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<AccountDTO> getAllActiveAccounts() {
        return accountRepository.findAll().stream()
                .filter(Account::isActive)
                .map(ACCOUNT_MAPPER::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public void updateAccount(UpdateAccountDTO updateAccountDTO) {
        Account account = ACCOUNT_MAPPER.mapToModel(updateAccountDTO);

        //check if account exists
        Account checkedAccount = findAccount(account.getId());

        //check if email available
        verifyEmailUnique(checkedAccount.getEmail());

        account.setActive(true);
        accountRepository.save(account);
    }

    private Account findAccount(UUID id) {
        return accountRepository.findById(id).orElseThrow(
                () -> new EntityNotFoundException(ENTITY, "id", "" + id));
    }

    private void verifyEmailUnique(String email) {
        if (accountRepository.existsAccountByEmail(email)) {
            throw new EmailUnavailableException(email);
        }
    }

    private void verifyIfAccountActive(Account account) {
        if (!account.isActive()) {
            throw new EntityAlreadyDeactivatedException(ENTITY, account.getId().toString());
        }
    }
}
