-- liquibase formatted sql

-- Changeset kristina:2023-08-13-create-events-table
CREATE TABLE `vzk_news`.`article` (
                                      `id` BINARY(16) NOT NULL,
                                      `date` VARCHAR(45) NOT NULL,
                                      `description` VARCHAR(1000) NOT NULL,
                                      `image` VARCHAR(100) NULL,
                                      `is_active` VARCHAR(45) NOT NULL,
                                      `title` VARCHAR(100) NOT NULL,
                                      PRIMARY KEY (`id`));

