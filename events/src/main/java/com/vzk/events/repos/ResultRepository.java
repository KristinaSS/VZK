package com.vzk.events.repos;

import com.vzk.events.models.Result;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ResultRepository extends JpaRepository<Result, UUID> {

    boolean existsByEvent_Id(UUID uuid);
}
