-- liquibase formatted sql

-- Changeset kristina:2023-08-13-create-account-table
CREATE TABLE IF NOT EXISTS `vzk_accounts`.`account` (
                                                            `id` INT NOT NULL AUTO_INCREMENT,
                                                            `name` VARCHAR(100) NOT NULL,
                                                            `email` VARCHAR(100) NOT NULL UNIQUE,
                                                            `password` VARCHAR(45) NOT NULL,
                                                            `is_active` TINYINT NOT NULL,
                                                            PRIMARY KEY (`id`));

-- Changeset kristina:2023-08-13-create-account-details-table
CREATE TABLE IF NOT EXISTS `vzk_accounts`.`account_details` (
                                                  `id` INT NOT NULL AUTO_INCREMENT,
                                                  `account_id` int NOT NULL UNIQUE,
                                                  `team` int NOT NULL,
                                                  `birthday` varchar(45) NOT NULL,
                                                  `country_origin` varchar(45) NOT NULL,
                                                  `image` varchar(200) DEFAULT NULL,
                                                  `gender` char(1) NOT NULL,
                                                  PRIMARY KEY (`id`),
                                                  KEY `ac_de_tm_fk_idx` (`team`),
                                                  CONSTRAINT `ac_de_acc_fk` FOREIGN KEY (`account_id`) REFERENCES `account` (`id`),
                                                  CONSTRAINT `ac_de_tm_fk` FOREIGN KEY (`team`) REFERENCES `teams` (`id`)
);

-- Changeset kristina:2023-08-13-create-account-details-table-alter
ALTER TABLE `vzk_accounts`.`account_details`
    ADD CONSTRAINT `ac_de_acc_fk`
        FOREIGN KEY (`team`)
            REFERENCES `vzk_accounts`.`account` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION;

-- Changeset kristina:2023-08-13-create-account-details-table-alter-fk
ALTER TABLE `vzk_accounts`.`account_details`
    ADD CONSTRAINT `ac_de_tm_fk`
        FOREIGN KEY (`account_id`)
            REFERENCES `vzk_accounts`.`teams` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION;

-- Changeset kristina:2023-08-13-create-teams-table-alter
CREATE TABLE IF NOT EXISTS `vzk_accounts`.`teams` (
                                        `id` INT NOT NULL AUTO_INCREMENT,
                                        `name` VARCHAR(45) NOT NULL,
                                        `captain` INT NOT NULL,
                                        `game` VARCHAR(45) NOT NULL,
                                        PRIMARY KEY (`id`));

-- Changeset kristina:2023-08-13-create-account_teams-table-alter
CREATE TABLE IF NOT EXISTS `vzk_accounts`.`account_teams` (
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


