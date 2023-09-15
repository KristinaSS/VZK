-- liquibase formatted sql

-- Changeset kristina:2023-08-13-create-events-table
CREATE TABLE `vzk_events`.`events` (
                                       `id` BINARY(16) NOT NULL,
                                       `date` VARCHAR(45) NOT NULL,
                                       `info` VARCHAR(300) NOT NULL,
                                       `name` VARCHAR(100) NOT NULL,
                                       `is_active` TINYINT NOT NULL,
                                           PRIMARY KEY (`id`));
