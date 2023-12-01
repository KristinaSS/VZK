package com.vzk.news.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "article")
public class Article {
    @Id
    @Column(name = "id")
    private UUID id;

    @Basic
    @Column(name = "date")
    private String date;

    @Basic
    @Column(name = "description")
    private String description;

    @Basic
    @Column(name = "image")
    private String image;

    @Basic
    @Column(name = "is_active")
    private boolean isActive;

    @Basic
    @Column(name = "title")
    private String title;
}
