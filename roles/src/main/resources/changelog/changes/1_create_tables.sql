-- liquibase formatted sql

-- Changeset kristina:2023-08-13-create-role-table
CREATE TABLE `vzk_roles`.`role` (
                                    `id` BINARY(16) NOT NULL,
                                    `name` VARCHAR(45) NOT NULL,
                                    `is_active` TINYINT NOT NULL,
                                    PRIMARY KEY (`id`));

-- Changeset kristina:2023-08-13-create-permissions-table
CREATE TABLE `vzk_roles`.`permissions` (
                                           `id` BINARY(16) NOT NULL,
                                           `name` VARCHAR(45) NOT NULL,
                                           `is_active` TINYINT NOT NULL,
                                           PRIMARY KEY (`id`));

-- Changeset kristina:2023-08-13-create-roles_permissions-table
CREATE TABLE `roles_permissions` (
                                     `id_roles` BINARY(16) NOT NULL,
                                     `id_permissions` BINARY(16) NOT NULL,
                                     PRIMARY KEY (`id_roles`,`id_permissions`),
                                     KEY `ro_per_per_fk_idx` (`id_permissions`),
                                     CONSTRAINT `ro_per_per_fk` FOREIGN KEY (`id_permissions`) REFERENCES `permissions` (`id`),
                                     CONSTRAINT `ro_per_ro_fk` FOREIGN KEY (`id_roles`) REFERENCES `role` (`id`));

-- Changeset kristina:2023-08-13-create-roles_accounts-table
CREATE TABLE `vzk_roles`.`roles_accounts` (
                                              `account_id` BINARY(16) NOT NULL,
                                              `role_id` BINARY(16) NOT NULL,
                                              PRIMARY KEY (`account_id`, `role_id`),
                                              INDEX `ro_acc_ro_fk_idx` (`role_id` ASC) VISIBLE,
                                              CONSTRAINT `ro_acc_ro_fk`
                                                  FOREIGN KEY (`role_id`)
                                                      REFERENCES `vzk_roles`.`role` (`id`)
                                                      ON DELETE NO ACTION
                                                      ON UPDATE NO ACTION);
