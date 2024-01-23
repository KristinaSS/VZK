-- liquibase formatted sql

-- Changeset kristina:2024-01-23-insert-game-data
insert into vzk_accounts.game (id, title, img, logo)
values  (0x278A656E90834FECAEF0EB954618BF65, 'CS:GO', 'https://wallpapers.com/images/hd/hd-counter-strike-global-offensive-background-sp8pzwi24m2hz0vb.jpg', 'https://esportbetweb.com/wp-content/uploads/2019/07/csgo-moreorange2.png'),
        (0x8EB23B3242D14C23AFDD5F3D2FA99E25, 'Valorant', 'https://images2.alphacoders.com/132/1322753.jpeg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Valorant_logo_-_pink_color_version.svg/1280px-Valorant_logo_-_pink_color_version.svg.png'),
        (0xFD984D169CBB46B5B76107E7D498F8B4, 'League of Legends', 'https://i.pinimg.com/originals/50/05/7d/50057dc2df5e0503d5de6f55b6a6df0b.jpg', 'https://ww2.freelogovectors.net/svg06/league-of-legends-logo-lol.svg');

-- Changeset kristina:2024-01-23-insert-team-data
insert into vzk_accounts.teams (id, name, captain, game, is_active, description)
values  (0x478FC39A61044E08A873BA77A19FC0FF, 'UK:EL', 0xB47E06E29F874CD781B5047C6F17E2EE, 0xFD984D169CBB46B5B76107E7D498F8B4, 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
        (0x7333DE74AD044CB290A7F3FACC6A77F4, 'OneTappers', 0xB4A21E2B241D4387B469A986190B555E, 0x8EB23B3242D14C23AFDD5F3D2FA99E25, 1, 'Sed fringilla magna eget sodales auctor. Etiam arcu nisi, lobortis aliquet accumsan id, viverra quis lorem. Etiam a scelerisque diam.'),
        (0xC8D60EB7AAAF455BBBA6F8A5343CDE3E, 'test team', 0x20E2989DF44E47A0908ABF0B7B506317, 0xFD984D169CBB46B5B76107E7D498F8B4, 0, 'Etiam feugiat egestas ante, id euismod urna. Cras tincidunt, justo sed hendrerit mattis, purus dolor efficitur lectus, in dictum nibh velit quis justo.');

-- Changeset kristina:2024-01-23-insert-acc-data
insert into vzk_accounts.account (id, name, email, password, is_active, username)
values  (0x07CAEBB4788D412E8DA8AFCA53630FA5, 'Ave Maria', 'jesus@pleasework.com', '$2a$10$scKO4hBJuJurTGb601pKdePinZBtBUOiRC6tAUv4OFl3HHhzZvhRG', 1, 'AvaMaria8888888'),
        (0x132D03B77B9F4F40BDCA869CB429DFDD, 'Insane MID', 'mid@vzk.com', '$2a$10$51ddl55xAInZ0J2MCJx7QuQg6P6q79WTnatsf0hmUQir8DLHlMMv6', 1, 'insane mid'),
        (0x20E2989DF44E47A0908ABF0B7B506317, 'Insane TOP1', 'top@vzk.com1', '$2a$10$psSAB0gX/BK9bFoqoVRzTeQKH8P1G4ZtjBMlQnP9NMmKONPUR7CSy', 1, 'insane top1'),
        (0x2E7E9848E98743D58A4FDBD754F2EA2F, 'Luna Deaa', 'lunichka@gmail.com', '$2a$10$2GBNskUxDvGp.tKjEQc4yuOz0VRS75oBn0xeFg4Sy1lSskfEJQuGy', 1, 'LunaDea198'),
        (0x3D57FD73064E43F89FBE83DE3E38C43F, 'Insane ADC', 'adc@vzk.com', '$2a$10$KZFgJV8.hCs9HpcHontZ3e.fHAD9madQYySeuvPmIdDfBeug8oaSq', 1, 'insane adc'),
        (0x47F7732551A8421AB54E900ADE539A30, 'Insane TOP', 'top@vzk.com', '$2a$10$scKO4hBJuJurTGb601pKdePinZBtBUOiRC6tAUv4OFl3HHhzZvhRG', 1, 'insane top'),
        (0x69B82514A42948FF9531D0458F070710, 'Kristina Stoyanova', 'krisagriza@gmail.com', '$2a$10$QTJ4/X7fxSEHIpW0X7h1huNFkQZE5n3n7BDlokX4XUyqTKOvTJ0B2', 1, 'luna12341123'),
        (0x7288680F0F6541A9BAAA96FF87D22C56, 'Ave Maria2', 'jesus2@pleasework.com', '$2a$10$scKO4hBJuJurTGb601pKdePinZBtBUOiRC6tAUv4OFl3HHhzZvhRG', 1, 'AvaMaria888'),
        (0x89B2024938234F76ABBBF7C3EA0AA539, 'Test Caster', 'testcaster@gmail.com', '$2a$10$scKO4hBJuJurTGb601pKdePinZBtBUOiRC6tAUv4OFl3HHhzZvhRG', 1, 'supercaster'),
        (0x8B77EF7E3496496F8F46B9645BEC4ED4, 'Test Partner', 'testpartner@gmail.com', '$2a$10$scKO4hBJuJurTGb601pKdePinZBtBUOiRC6tAUv4OFl3HHhzZvhRG', 1, 'richpartner'),
        (0x939B312B67B742088E969F5ECDD456DA, 'Test Manager', 'testmanager@gmail.com', '$2a$10$scKO4hBJuJurTGb601pKdePinZBtBUOiRC6tAUv4OFl3HHhzZvhRG', 1, 'geniusmanager'),
        (0xB47E06E29F874CD781B5047C6F17E2EE, 'Luna Player', 'testplayer@gmail.com', '$2a$10$scKO4hBJuJurTGb601pKdePinZBtBUOiRC6tAUv4OFl3HHhzZvhRG', 1, 'insaneBotLaner'),
        (0xB4A21E2B241D4387B469A986190B555E, 'Insane Val', 'val@vzk.com1', '$2a$10$ck2B6w0bFI1MxAdfkXh3l.2A6VGYQKNDpxRRtoAI6BqWSbEAtuwse', 1, 'insane Val1'),
        (0xB7C8E0B1779048919E5367AC2295F946, 'Insane SUP', 'sup@vzk.com', '$2a$10$FSNtDrY5k5/1gmKw2OI9deBGPEjtulCLGvcGmax0ds6qseMVXFVZq', 1, 'insane sup'),
        (0xBF03F36A16C84A1DB706ACE17753806A, 'John Doe', 'john.doe@example.com', '$2a$10$scKO4hBJuJurTGb601pKdePinZBtBUOiRC6tAUv4OFl3HHhzZvhRG', 1, 'johndoe'),
        (0xBFBE93BD973D4B79AFC05AF6BE243932, 'Luna Dea', 'luna@gmail.com', '$2a$10$jeOvnI1SOtLYIvbec3CJu.S5ne0ur311KMrQRto163L9ebyiAz9n6', 1, 'Lunadea98'),
        (0xC3F81E0011F54356A5B4896539FA2811, 'Test Coach', 'testcoach@gmail.com', '$2a$10$scKO4hBJuJurTGb601pKdePinZBtBUOiRC6tAUv4OFl3HHhzZvhRG', 1, 'mastercoach'),
        (0xC6F13FCAA35B46D08246D5CED498197D, 'Test User', 'testuser@gmail.com', '$2a$10$scKO4hBJuJurTGb601pKdePinZBtBUOiRC6tAUv4OFl3HHhzZvhRG', 1, 'simpleuser'),
        (0xF3CB6BF348924A4DAD95244D8AF74CE2, 'Kristina Stoyanova', 'kristinasttoyanova@gmail.com', '$2a$10$xy3lZZH9.YQ8GGRDC9mIvOgT6Ho5VyRVny/MZ39JMO2uPvkJIN1ji', 0, 'Krisi99'),
        (0xF52D9AA884A24830A508008D43453B75, 'Ave Maria3', 'jesus3@pleasework.com', '$2a$10$scKO4hBJuJurTGb601pKdePinZBtBUOiRC6tAUv4OFl3HHhzZvhRG', 1, 'AvaMaria8888');


-- Changeset kristina:2024-01-23-insert-acc-details-data
insert into vzk_accounts.account_details (id, account_id, team, birthday, country_origin, image, gender, player_name, role, twitter, twitch, youtube, instagram)
values  (0x0064514AFB304282A435A71258CB49B5, 0x20E2989DF44E47A0908ABF0B7B506317, 0xC8D60EB7AAAF455BBBA6F8A5343CDE3E, '2003-05-28', 'UK', 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zeri_0.jpg', 0, 'min92', 'player', null, 'https://www.twitch.tv/', 'https://www.youtube.com/', null),
        (0x3E4618158DF6420690A852FF81F7AFCD, 0xC3F81E0011F54356A5B4896539FA2811, 0x478FC39A61044E08A873BA77A19FC0FF, '2000-04-19', 'UK', 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Briar_0.jpg', 0, 'min93', 'coach', null, null, 'https://www.youtube.com/', null),
        (0x4DCE71E2B70841B6A500E594BDF2933F, 0xB7C8E0B1779048919E5367AC2295F946, 0x478FC39A61044E08A873BA77A19FC0FF, '2001-09-08', 'UK', 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Senna_0.jpg', 0, 'coolSup', 'player', null, 'https://www.twitch.tv/', null, 'https://www.instagram.com/'),
        (0x50C2714A118342D08D58D2785A5404EC, 0x47F7732551A8421AB54E900ADE539A30, 0x478FC39A61044E08A873BA77A19FC0FF, '1998-11-12', 'UK', 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ornn_0.jpg', 0, 'coolTop', 'player', 'https://twitter.com/home', null, 'https://www.youtube.com/', null),
        (0x68444A7EC6E04C6DAEE935AD75A4CBE4, 0x3D57FD73064E43F89FBE83DE3E38C43F, 0x478FC39A61044E08A873BA77A19FC0FF, '1999-08-07', 'UK', 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Kaisa_0.jpg', 0, 'coolAdc', 'player', 'https://twitter.com/home', null, 'https://www.youtube.com/', null),
        (0x7712AD84AAFA4CB98A16E3B380AC958F, 0xB4A21E2B241D4387B469A986190B555E, 0x7333DE74AD044CB290A7F3FACC6A77F4, '2000-04-20', 'UK', 'https://egw.news/uploads/news/1687873841241-16x9.jpg', 2, 'insane valorant', 'player', 'https://twitter.com/home', 'https://www.twitch.tv/', null, null),
        (0xA1446BADCEFD436C80339204657BF3E8, 0xB47E06E29F874CD781B5047C6F17E2EE, 0x478FC39A61044E08A873BA77A19FC0FF, '1999-05-17', 'Algeria', 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Lux_0.jpg', 1, 'min77', 'player', 'https://twitter.com/home', 'https://www.twitch.tv/', null, 'https://www.instagram.com/'),
        (0xA51BBAB2241A4AFD82DD5E7890B143B1, 0x132D03B77B9F4F40BDCA869CB429DFDD, 0x478FC39A61044E08A873BA77A19FC0FF, '1997-03-04', 'UK', 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ezreal_0.jpg', 0, 'coolMid', 'player', null, 'https://www.twitch.tv/', 'https://www.youtube.com/', null),
        (0xFE727E28886B413FBE673B00CCA5E12B, 0x939B312B67B742088E969F5ECDD456DA, 0x478FC39A61044E08A873BA77A19FC0FF, '1995-07-16', 'UK', 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Xayah_0.jpg', 0, 'min94', 'manager', 'https://twitter.com/home', 'https://www.twitch.tv/', 'https://www.youtube.com/', 'https://www.instagram.com/');
