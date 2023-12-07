-- liquibase formatted sql

-- Changeset kristina:2023-08-13-create-contact_request-table
CREATE TABLE `vzk_request`.`contact_request` (
                                              `id` BINARY(16) NOT NULL,
                                              `name` varchar(100) null,
                                              `email` VARCHAR(100) NOT NULL,
                                              `is_consent` TINYINT NOT NULL,
                                              `subject` VARCHAR(45) NOT NULL,
                                              `message` VARCHAR(45) NOT NULL,
                                              `date_created` VARCHAR(45) NOT NULL,
                                              PRIMARY KEY (`id`));

-- Changeset kristina:2023-08-13-create-application_request-table
CREATE TABLE `application_request` (
                                       `id` BINARY(16) NOT NULL,
                                       `contact_request` BINARY(16) NOT NULL,
                                       `application_type` varchar(100) NOT NULL,
                                       `profile_url` varchar(200) NULL,
                                       `max_rank` varchar(45) NULL,
                                       `gender` char(1) NOT NULL,
                                       `birthday` varchar(45) NOT NULL,
                                       `country_origin` varchar(45) NOT NULL,
                                       `applied_role` varchar(45) NULL,
                                       `applied_game` BINARY(16) NOT NULL,
                                       `description` varchar(300) DEFAULT NULL,
                                       PRIMARY KEY (`id`),
                                       CONSTRAINT `application_fk` FOREIGN KEY (`contact_request`) REFERENCES `contact_request` (`id`)
)

