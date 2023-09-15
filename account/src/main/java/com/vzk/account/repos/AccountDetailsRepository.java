package com.vzk.account.repos;

import com.vzk.account.models.Account;
import com.vzk.account.models.AccountDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface AccountDetailsRepository extends JpaRepository<AccountDetails, UUID> {
    boolean existsAccountDetailsByAccount(Account account);

    AccountDetails findAccountDetailsByAccount(Account account);
}
