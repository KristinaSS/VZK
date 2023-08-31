package com.vzk.roles.repos;

import com.vzk.roles.models.RoleAccount;
import com.vzk.roles.models.RoleAccountID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleAccountRepository extends JpaRepository<RoleAccount, RoleAccountID> {
}
