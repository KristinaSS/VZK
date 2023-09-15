package com.vzk.account.repos;

import com.vzk.account.models.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface AccountRepository extends JpaRepository<Account, UUID> {

    Account findAccountByEmail(String email);

    boolean existsAccountByEmail(String email);
}
