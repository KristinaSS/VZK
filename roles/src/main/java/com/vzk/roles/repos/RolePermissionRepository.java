package com.vzk.roles.repos;

import com.vzk.roles.models.RolePermission;
import com.vzk.roles.models.RolePermissionID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RolePermissionRepository extends JpaRepository<RolePermission, RolePermissionID> {
}
