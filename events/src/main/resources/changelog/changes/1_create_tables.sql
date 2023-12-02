-- liquibase formatted sql

-- Changeset kristina:2023-08-13-create-events-table
CREATE TABLE `vzk_events`.`events`
(
    `id`         BINARY(16)   NOT NULL,
    `date`       VARCHAR(45)  NOT NULL,
    `info`       VARCHAR(300) NOT NULL,
    `name`       VARCHAR(100) NOT NULL,
    `is_active`  TINYINT      NOT NULL,
    `game`       BINARY(16)   NOT NULL,
    `enemy_logo` VARCHAR(45)  NOT NULL,
    PRIMARY KEY (`id`)
);e

-- Changeset kristina:2023-12-01-create-results-table
create table result
(
    id             binary(16)   not null
        primary key,
    title          varchar(100) not null,
    game           binary(16)   not null,
    date_time      varchar(45)  not null,
    enemy_result   varchar(10)  not null,
    team_result    varchar(10)  not null,
    replay_url     varchar(200) not null,
    is_active      tinyint      not null,
    description    varchar(200) not null,
    enemy_logo_url varchar(200) not null,
    event_id binary(16) not null
);

-- Changeset kristina:2023-12-02-alter-results-table
alter table result
    add constraint result_events_id_fk
        foreign key (event_id) references events (id);
