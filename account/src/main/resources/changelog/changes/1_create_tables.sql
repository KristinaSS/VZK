-- liquibase formatted sql

-- Changeset kristina:2023-08-13-create-account-table
CREATE TABLE IF NOT EXISTS `vzk_accounts`.`account` (
                                                            `id` BINARY(16) NOT NULL,
                                                            `name` VARCHAR(100) NOT NULL,
                                                            `email` VARCHAR(100) NOT NULL UNIQUE,
                                                            `username` VARCHAR(50) NOT NULL UNIQUE,
                                                            `password` VARCHAR(150) NOT NULL,
                                                            `is_active` TINYINT NOT NULL,
                                                            PRIMARY KEY (`id`));

-- Changeset kristina:2023-08-13-create-teams-table-alter
CREATE TABLE IF NOT EXISTS `vzk_accounts`.`teams` (
                                                      `id` BINARY(16) NOT NULL,
                                                      `name` VARCHAR(45) NOT NULL,
                                                      `captain` BINARY(16) NOT NULL,
                                                      `game` VARCHAR(45) NOT NULL,
                                                      `description` varchar(512) null,
                                                      `is_active` TINYINT NOT NULL,
                                                      PRIMARY KEY (`id`));

-- Changeset kristina:2023-08-13-create-account-details-table
CREATE TABLE IF NOT EXISTS `vzk_accounts`.`account_details` (
                                                  `id` BINARY(16) NOT NULL,
                                                  `account_id` BINARY(16) NOT NULL UNIQUE,
                                                  `team` BINARY(16) NOT NULL,
                                                  `birthday` varchar(45) NOT NULL,
                                                  `country_origin` varchar(45) NOT NULL,
                                                  `image` varchar(200) DEFAULT NULL,
                                                  `gender` int NOT NULL,
                                                  `role` varchar(64) NOT NULL,
                                                  `twitter` varchar(256) NOT NULL,
                                                  `twitch` varchar(256) NOT NULL,
                                                  `youtube` varchar(256) NOT NULL,
                                                  `instagram` varchar(256) NOT NULL,
                                                  `player_name` VARCHAR(100) NOT NULL,
                                                  PRIMARY KEY (`id`),
                                                  KEY `ac_de_tm_fk_idx` (`team`),
                                                  CONSTRAINT `ac_de_acc_fk` FOREIGN KEY (`account_id`) REFERENCES `account` (`id`),
                                                  CONSTRAINT `ac_de_tm_fk` FOREIGN KEY (`team`) REFERENCES `teams` (`id`)
);

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

-- Changeset kristina:2023-11-22-create-table-game
CREATE TABLE IF NOT EXISTS `vzk_accounts`.`game` (
                                                     `id` BINARY(16) NOT NULL,
                                                     `title` VARCHAR(100) NOT NULL,
                                                     `img` VARCHAR(512) NOT NULL,
                                                     `logo` VARCHAR(512) NOT NULL,
                                                     PRIMARY KEY (`id`));
-- Changeset kristina:2023-11-22-alter_teams_game-type
alter table teams
    modify game binary(16) not null;

-- Changeset kristina:2023-11-22-alter_teams_game-fk
alter table teams
    add constraint tm_gm_fk
        foreign key (game) references game (id);

