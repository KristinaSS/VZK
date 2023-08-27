-- liquibase formatted sql

-- Changeset kristina:2023-08-12-create-account-table
-- precondition-sql-check expectedResult:0 SELECT COUNT(*) FROM `vzk_events`.`events`
-- onFail=MARK_RAN
CREATE TABLE `vzk_events`.`events` (
                                       `id` INT NOT NULL AUTO_INCREMENT,
                                       `date` VARCHAR(45) NOT NULL,
                                       `info` VARCHAR(300) NOT NULL,
                                       PRIMARY KEY (`id`));
