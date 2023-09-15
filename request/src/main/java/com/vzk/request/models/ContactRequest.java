package com.vzk.request.models;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "contact_request")
public class ContactRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private UUID id;

    @Basic
    @Column(name = "email")
    private String email;

    @Basic
    @Column(name = "is_consent")
    private boolean isConsent;

    @Basic
    @Column(name = "subject")
    private String subject;

    @Basic
    @Column(name = "message")
    private String message;

    @Basic
    @Column(name = "is_application_request")
    private boolean isApplicationRequest;

    @Basic
    @Column(name = "date_created")
    private LocalDateTime timeCreated;
}
