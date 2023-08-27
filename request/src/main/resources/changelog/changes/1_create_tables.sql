-- liquibase formatted sql

-- Changeset kristina:2023-08-13-create-contact_request-table
CREATE TABLE `vzk_request`.`contact_request` (
                                              `id` INT NOT NULL AUTO_INCREMENT,
                                              `email` VARCHAR(100) NOT NULL,
                                              `is_consent` TINYINT NOT NULL,
                                              `subject` VARCHAR(45) NOT NULL,
                                              `message` VARCHAR(45) NOT NULL,
                                              `is_application_request` TINYINT NOT NULL,
                                              PRIMARY KEY (`id`));

-- Changeset kristina:2023-08-13-create-application_request-table
CREATE TABLE `vzk_request`.`application_request` (
                                                     `contact_request` INT NOT NULL,
                                                     `player_name` VARCHAR(100) NOT NULL,
                                                     `profile_url` VARCHAR(200) NOT NULL,
                                                     `max_rank` VARCHAR(45) NOT NULL,
                                                     `gender` CHAR(1) NOT NULL,
                                                     `birthday` VARCHAR(45) NOT NULL,
                                                     `country_origin` VARCHAR(45) NOT NULL,
                                                     `applied_role` VARCHAR(45) NOT NULL,
                                                     `applied_game` VARCHAR(45) NOT NULL,
                                                     `description` VARCHAR(300) NULL,
                                                     PRIMARY KEY (`contact_request`),
                                                     CONSTRAINT `application_fk`
                                                         FOREIGN KEY (`contact_request`)
                                                             REFERENCES `vzk_request`.`contact_request` (`id`)
                                                             ON DELETE NO ACTION
                                                             ON UPDATE NO ACTION);

