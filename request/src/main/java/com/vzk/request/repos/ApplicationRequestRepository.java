package com.vzk.request.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApplicationRequestRepository extends JpaRepository<com.vzk.request.models.ApplicationRequest, Integer> {
}
