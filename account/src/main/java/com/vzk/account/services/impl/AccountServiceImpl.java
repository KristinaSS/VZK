package com.vzk.account.services.impl;

import com.vzk.account.exceptions.EmailUnavailableException;
import com.vzk.account.exceptions.EntityAlreadyDeactivatedException;
import com.vzk.account.exceptions.EntityNotFoundException;
import com.vzk.account.exceptions.InvalidInputDataException;
import com.vzk.account.models.Account;
import com.vzk.account.repos.AccountRepository;
import com.vzk.account.services.AccountService;
import org.openapitools.model.*;
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

        //check if email available
        verifyEmailUnique(createdAccount.getEmail(), false);

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
    public ShortAccountDTO getShortAccountByEmail(String email) {
        Account account = accountRepository.findAccountByEmail(email);
        if (account == null) {
            throw new EntityNotFoundException(ENTITY, "email", email);
        }
        return ACCOUNT_MAPPER.mapToShortDTO(account);
    }

    @Override
    public void updateAccountAdmin(UpdateAccountAdminDTO updateAccountDTO) {
        if (updateAccountDTO.getEmailOld() == null || updateAccountDTO.getEmailOld().isEmpty() ||
                updateAccountDTO.getEmailNew() == null || updateAccountDTO.getEmailNew().isEmpty()) {
            throw new InvalidInputDataException();
        }

        Account account = ACCOUNT_MAPPER.mapToModel(updateAccountDTO);

        //check if account exists
        Account checkedAccount = ACCOUNT_MAPPER.mapToModel(getAccountByEmail(updateAccountDTO.getEmailOld()));

        //check if email available
        verifyEmailUnique(account.getEmail(), updateAccountDTO.getEmailNew().equals(updateAccountDTO.getEmailOld()));


        Account updated = updateAccountFields(checkedAccount, account);
        updated.setActive(true);

        accountRepository.save(updated);
    }

    @Override
    public void updateAccountUser(UpdateAccountUserDTO updateAccountUserDTO) {
        Account account = ACCOUNT_MAPPER.mapToModel(updateAccountUserDTO);

        //check if account exists
        Account checkedAccount = ACCOUNT_MAPPER.mapToModel(getAccountByEmail(account.getEmail()));

        //check if email available
        verifyEmailUnique(checkedAccount.getEmail(), true);

        Account updated = updateAccountFields(checkedAccount, account);
        updated.setActive(true);

        accountRepository.save(updated);
    }

    private Account findAccount(UUID id) {
        return accountRepository.findById(id).orElseThrow(
                () -> new EntityNotFoundException(ENTITY, "id", "" + id));
    }

    private void verifyEmailUnique(String email, boolean isUpdate) {
        if (isUpdate && !accountRepository.existsAccountByEmail(email)) {
            throw new EntityNotFoundException(ENTITY, "email", email);
        } else if (!isUpdate && accountRepository.existsAccountByEmail(email)) {
            throw new EmailUnavailableException(email);
        }
    }

    private void verifyIfAccountActive(Account account) {
        if (!account.isActive()) {
            throw new EntityAlreadyDeactivatedException(ENTITY, account.getId().toString());
        }
    }

    private Account updateAccountFields(Account account, Account updated) {
        if (updated.getName() != null && !updated.getName().isEmpty()) {
            account.setName(updated.getName());
        }
        if (updated.getUsername() != null && !updated.getUsername().isEmpty()) {
            account.setUsername(updated.getUsername());
        }
        if (updated.getEmail() != null && !updated.getEmail().isEmpty()) {
            account.setEmail(updated.getEmail());
        }
        if (updated.getPassword() != null && !updated.getPassword().isEmpty()) {
            account.setPassword(updated.getPassword());
        }

        return account;
    }
}
