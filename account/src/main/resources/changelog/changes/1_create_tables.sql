-- liquibase formatted sql

-- Changeset kristina:2023-08-13-create-account-table
CREATE TABLE IF NOT EXISTS `vzk_accounts`.`account` (
                                                            `id` BINARY(16) NOT NULL,
                                                            `name` VARCHAR(100) NOT NULL,
                                                            `email` VARCHAR(100) NOT NULL UNIQUE,
                                                            `password` VARCHAR(45) NOT NULL,
                                                            `is_active` TINYINT NOT NULL,
                                                            PRIMARY KEY (`id`));

-- Changeset kristina:2023-08-13-create-teams-table-alter
CREATE TABLE IF NOT EXISTS `vzk_accounts`.`teams` (
                                                      `id` BINARY(16) NOT NULL,
                                                      `name` VARCHAR(45) NOT NULL,
                                                      `captain` BINARY(16) NOT NULL,
                                                      `game` VARCHAR(45) NOT NULL,
                                                      PRIMARY KEY (`id`));

-- Changeset kristina:2023-08-13-create-account-details-table
CREATE TABLE IF NOT EXISTS `vzk_accounts`.`account_details` (
                                                  `id` BINARY(16) NOT NULL,
                                                  `account_id` BINARY(16) NOT NULL UNIQUE,
                                                  `team` BINARY(16) NOT NULL,
                                                  `birthday` varchar(45) NOT NULL,
                                                  `country_origin` varchar(45) NOT NULL,
                                                  `image` varchar(200) DEFAULT NULL,
                                                  `gender` char(1) NOT NULL,
                                                  `player_name` VARCHAR(100) NOT NULL,
                                                  PRIMARY KEY (`id`),
                                                  KEY `ac_de_tm_fk_idx` (`team`),
                                                  CONSTRAINT `ac_de_acc_fk` FOREIGN KEY (`account_id`) REFERENCES `account` (`id`),
                                                  CONSTRAINT `ac_de_tm_fk` FOREIGN KEY (`team`) REFERENCES `teams` (`id`)
);

-- Changeset kristina:2023-08-13-create-account_teams-table-alter
CREATE TABLE IF NOT EXISTS `vzk_accounts`.`account_teams` (
                                                `account_id` BINARY(16) NOT NULL,
                                                `team_id` BINARY(16) NOT NULL,
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

-- Changeset kristina:2023-08-13-alter-teams
ALTER TABLE `vzk_accounts`.`teams`
    ADD COLUMN `is_active` TINYINT NOT NULL AFTER `game`,
    ADD UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE;
;

-- Changeset kristina:2023-08-13-alter-account-details
ALTER TABLE `vzk_accounts`.`account_details`
    DROP FOREIGN KEY `ac_de_tm_fk`;
ALTER TABLE `vzk_accounts`.`account_details`
    CHANGE COLUMN `team` `team` BINARY(16) NULL ;
ALTER TABLE `vzk_accounts`.`account_details`
    ADD CONSTRAINT `ac_de_tm_fk`
        FOREIGN KEY (`team`)
            REFERENCES `vzk_accounts`.`teams` (`id`);
