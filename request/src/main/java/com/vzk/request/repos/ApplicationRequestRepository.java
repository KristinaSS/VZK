package com.vzk.request.repos;

import com.vzk.request.models.ApplicationRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ApplicationRequestRepository extends JpaRepository<ApplicationRequest, UUID> {
}
