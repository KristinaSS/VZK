-- liquibase formatted sql

-- Changeset kristina:2023-08-12-create-account-table
-- precondition-sql-check expectedResult:0 SELECT COUNT(*) FROM `vzk_accounts`.`account`
-- onFail=MARK_RAN
CREATE TABLE IF NOT EXISTS `vzk_accounts`.`account` (
                                                            `id` INT NOT NULL AUTO_INCREMENT,
                                                            `name` VARCHAR(100) NOT NULL,
                                                            `email` VARCHAR(100) NOT NULL,
                                                            `password` VARCHAR(45) NOT NULL,
                                                            `account_type` VARCHAR(10) NOT NULL,
                                                            `is_active` TINYINT NOT NULL,
                                                            PRIMARY KEY (`id`));

-- Changeset kristina:2023-08-12-create-account-details-table
-- precondition-sql-check expectedResult:0 SELECT COUNT(*) FROM `vzk_accounts`.`account_details`
-- onFail=MARK_RAN
CREATE TABLE `vzk_accounts`.`account_details` (
                                                  `account_id` INT NOT NULL,
                                                  `team` INT NOT NULL,
                                                  `role` VARCHAR(45) NOT NULL,
                                                  `birthday` VARCHAR(45) NOT NULL,
                                                  `country_origin` VARCHAR(45) NOT NULL,
                                                  `image` VARCHAR(200) NULL,
                                                  `gender` CHAR(1) NOT NULL,
                                                  PRIMARY KEY (`account_id`));

-- Changeset kristina:2023-08-12-create-account-details-table
-- precondition-sql-check expectedResult:0 SELECT COUNT(*) FROM `vzk_accounts`.`account_details`
-- onFail=MARK_RAN
ALTER TABLE `vzk_accounts`.`account_details`
    ADD CONSTRAINT `ac_de_acc_fk`
        FOREIGN KEY (`account_id`)
            REFERENCES `vzk_accounts`.`account` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION;