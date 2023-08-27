-- liquibase formatted sql

-- Changeset kristina:2023-08-13-create-account-table
CREATE TABLE IF NOT EXISTS `vzk_accounts`.`account` (
                                                            `id` INT NOT NULL AUTO_INCREMENT,
                                                            `name` VARCHAR(100) NOT NULL,
                                                            `email` VARCHAR(100) NOT NULL,
                                                            `password` VARCHAR(45) NOT NULL,
                                                            `account_type` VARCHAR(10) NOT NULL,
                                                            `is_active` TINYINT NOT NULL,
                                                            PRIMARY KEY (`id`));

-- Changeset kristina:2023-08-13-create-account-details-table
CREATE TABLE `vzk_accounts`.`account_details` (
                                                  `account_id` INT NOT NULL,
                                                  `team` INT NOT NULL,
                                                  `role` VARCHAR(45) NOT NULL,
                                                  `birthday` VARCHAR(45) NOT NULL,
                                                  `country_origin` VARCHAR(45) NOT NULL,
                                                  `image` VARCHAR(200) NULL,
                                                  `gender` CHAR(1) NOT NULL,
                                                  PRIMARY KEY (`account_id`));

-- Changeset kristina:2023-08-13-create-account-details-table-alter
ALTER TABLE `vzk_accounts`.`account_details`
    ADD CONSTRAINT `ac_de_acc_fk`
        FOREIGN KEY (`account_id`)
            REFERENCES `vzk_accounts`.`account` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION;

-- Changeset kristina:2023-08-13-create-teams-table-alter
CREATE TABLE `vzk_accounts`.`teams` (
                                        `id` INT NOT NULL AUTO_INCREMENT,
                                        `name` VARCHAR(45) NOT NULL,
                                        `captain` INT NOT NULL,
                                        `game` VARCHAR(45) NOT NULL,
                                        PRIMARY KEY (`id`));

-- Changeset kristina:2023-08-13-create-account_teams-table-alter
CREATE TABLE `vzk_accounts`.`account_teams` (
                                                `account_id` INT NOT NULL,
                                                `team_id` INT NOT NULL,
                                                PRIMARY KEY (`account_id`, `team_id`),
                                                INDEX `acc_tea_tea_fk_idx` (`team_id` ASC) VISIBLE,
                                                CONSTRAINT `acc_tea_acc_fk`
                                                    FOREIGN KEY (`account_id`)
                                                        REFERENCES `vzk_accounts`.`account` (`id`)
                                                        ON DELETE NO ACTION
                                                        ON UPDATE NO ACTION,
                                                CONSTRAINT `acc_tea_tea_fk`
                                                    FOREIGN KEY (`team_id`)
                                                        REFERENCES `vzk_accounts`.`teams` (`id`)
                                                        ON DELETE NO ACTION
                                                        ON UPDATE NO ACTION);


