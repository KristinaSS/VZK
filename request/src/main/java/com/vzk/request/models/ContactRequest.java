package com.vzk.request.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "contact_request")
public class ContactRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Basic
    @Column(name = "email")
    private String email;

    @Basic
    @Column(name = "is_consent")
    private boolean is_consent;

    @Basic
    @Column(name = "subject")
    private String subject;

    @Basic
    @Column(name = "message")
    private String message;

    @Basic
    @Column(name = "is_application_request")
    private boolean isApplicationRequest;
}
