-- liquibase formatted sql

-- Changeset kristina:2024-01-23-insert-request-data
insert into vzk_request.contact_request (is_consent, id, name, email, subject, message, date_created)
values  (1, 0x021735FE79D74144818D9DBBAF38A3AA, 'Alex Vause2', 'alex2@gmail.com', 'general', 'bla bla bla', '2023-12-04 20:21:51.721312'),
        (1, 0x03D9B8DCA3144210BFAC82B97C3C7C31, 'Kristina Enchev', 'krisagriza@gmail.com', 'application', '', '2023-12-07 22:47:03.176204'),
        (1, 0x06039D08CDC148A5812250A22A2C3A5F, 'Alex Vause', 'alex@gmail.com', 'general', 'bla bla bla', '2023-12-04 20:18:54.867275'),
        (1, 0x0A989B6AF8E94BE4AA4A4FAFE2673C06, 'Kristina Stoyanova2', 'krisagriza@gmail.com', 'application', '', '2023-12-07 23:15:03.161286'),
        (1, 0x16C72082BC4541B8AED4E8C15700F6D0, 'Kristina Enchev', 'krisagriza@gmail.com', 'application', '', '2023-12-07 22:55:04.024832'),
        (1, 0x36BDD2904C11425C8663405973C15678, 'Kristina Stoyanova', 'krisagriza@gmail.com', 'application', '', '2023-12-07 22:32:25.297447'),
        (1, 0x426D35E5082B4B318508303906B0AC6B, 'Kristina Enchev', 'krisagriza@gmail.com', 'other', 'other topic', '2023-12-09 16:17:09.848726'),
        (1, 0x4BF050030C1542A497EF447F32D21497, 'Kristina Stoyanova', 'krisagriza@gmail.com', 'application', '', '2023-12-07 22:34:24.350366'),
        (1, 0x5040CCD5E43047A7BB7F2B85C749875E, 'Kristina Enchev', 'krisagriza@gmail.com', 'application', '', '2023-12-07 22:45:05.16238'),
        (1, 0x5289166EC3724D4B94BFB62EAF5D88C0, 'Alex Player2', 'Player2@gmail.com', 'application', 'bla bla bla', '2023-12-04 23:08:21.57622'),
        (1, 0x52D15F4C91924843ABC092C5DCDD3840, 'Kristina Enchev', 'krisagriza@gmail.com', 'application', '', '2023-12-07 22:46:20.797831'),
        (1, 0x5BE9CE3331D04B738498BF1E0DA5916B, 'Kristina Enchev', 'krisagriza@gmail.com', 'application', '', '2023-12-07 22:50:39.71228'),
        (1, 0x6B913E0F083247BDB53DEC06A799EE18, 'Kristina Enchev', 'krisagriza@gmail.com', 'application', '', '2023-12-07 22:44:38.325106'),
        (1, 0x7145865486EA49B881EB402671BD561B, 'Kristina Enchev', 'krisagriza@gmail.com', 'application', '', '2023-12-07 23:03:11.010167'),
        (1, 0x74CC7EB121E34F1BBEA8ACFB9B7E1538, 'Kristina Enchev', 'krisagriza@gmail.com', 'generalInquiry', 'asdasd', '2023-12-07 22:14:28.497851'),
        (1, 0x795B1F7F84D14908B237C97D10EDA3BB, 'Kristina Enchev', 'krisagriza@gmail.com', 'generalInquiry', 'asdasd', '2023-12-07 22:23:59.083437'),
        (1, 0x85BECE6E75BE44E0AA4A413F5A0DE58F, 'Kristina Stoyanova2', 'krisagriza@gmail.com', 'application', '', '2023-12-07 23:15:03.12449'),
        (1, 0x8E885DD1916549679C959AE957204620, 'Kristina Enchev', 'krisagriza@gmail.com', 'partnership', 'i want to be a partner', '2023-12-09 16:20:49.85138'),
        (1, 0x8F593E38458D4A659E3865158DAB8400, 'Alex Manager2', 'alexManager2@gmail.com', 'application', 'bla bla bla', '2023-12-04 23:07:18.672845'),
        (1, 0x8FEA884A857E40FC99E7F9FE4C7DDDB9, 'Kristina Enchev', 'krisagriza@gmail.com', 'application', '', '2023-12-07 22:54:21.677688'),
        (1, 0x913D0A2ECAB94C88A98ADFD0D5167AE1, 'Kristina Stoyanova', 'krisagriza@gmail.com', 'application', '', '2023-12-07 23:10:20.763976'),
        (1, 0x958302AE26C946CA82EB4B1ECCF46705, 'Kristina Enchev', 'krisagriza@gmail.com', 'application', '', '2023-12-07 22:43:51.119194'),
        (1, 0x95EAC0457BD84F93AAAF3B5EFFE461B8, 'Kristina Enchev', 'krisagriza@gmail.com', 'application', '', '2023-12-07 23:09:18.622461'),
        (1, 0x972C9323A0074986A488C9950B1662E6, 'Kristina Enchev', 'krisagriza@gmail.com', 'application', '', '2023-12-07 23:00:19.456'),
        (1, 0x9D09F174F50A428D897AFD7EE94B26E8, 'Kristina Stoyanova', 'krisagriza@gmail.com', 'application', '', '2023-12-07 22:33:23.866794'),
        (1, 0xA0E1182773FE4A38BA2C23531E7E7A56, 'Kristina Enchev', 'krisagriza@gmail.com', 'partnership', 'aljdlajdlajd', '2023-12-09 16:21:46.524335'),
        (1, 0xACE97E3652624C02B82063EEC59DD365, 'Kristina Stoyanova', 'krisagriza@gmail.com', 'other', 'other stuff', '2023-12-09 16:18:15.310408'),
        (1, 0xB05900A1521A4EC19D1D8671E8722B69, 'Alex ADC', 'alexADC@gmail.com', 'application', 'bla bla bla', '2023-12-04 22:33:47.464654'),
        (1, 0xB076B01F9BC0495B87A55E8C36B92F14, 'Alex Manager', 'alexManager@gmail.com', 'general', 'bla bla bla', '2023-12-04 20:23:10.168184'),
        (1, 0xB40491CA4FBF48ADAFC0B202A24FE6B9, 'Kristina Stoyanova', 'kristinasttoyanova@gmail.com', 'generalInquiry', 'This is a test comment.', '2024-01-11 20:40:44.088018'),
        (1, 0xBB734E637F3041679F6A5513B831AB6D, 'Kristina Stoyanova2', 'krisagriza@gmail.com', 'generalInquiry', 'I have a question, thank you!', '2023-12-09 16:14:07.014811'),
        (1, 0xC084DE33BA1843468B61D23C74AF271E, 'Kristina Stoyanova', 'krisagriza@gmail.com', 'partnership', 'a/.da;''l;.'';das', '2023-12-29 17:24:38.193668'),
        (1, 0xD47992E37796474FA76F107F98ACA36E, 'Kristina Stoyanova', 'krisagriza@gmail.com', 'application', '', '2023-12-07 22:34:31.214593'),
        (1, 0xE15E6327A43643FCADBE32C17F1897BE, 'Kristina Enchev', 'krisagriza@gmail.com', 'application', '', '2023-12-07 22:54:15.925901'),
        (1, 0xE40FBDDE4178441B8C1208BD994077A0, 'Alex Player2', 'Player2@gmail.com', 'application', 'bla bla bla', '2023-12-04 23:16:36.422348'),
        (1, 0xE9690A3750914CE6A1E0E0A0D5D9F59D, 'Kristina Enchev', 'krisagriza@gmail.com', 'generalInquiry', 'effafa', '2024-01-07 23:54:08.309508'),
        (1, 0xEDEF54C4035447198060D444A9D3B0D5, 'Kristina Enchev', 'krisagriza@gmail.com', 'generalInquiry', 'asdasd', '2023-12-07 22:27:05.906283'),
        (1, 0xEFAC65B3996748D79708EEB3EC8D132D, 'Kristina Stoyanova', 'krisagriza@gmail.com', 'application', '', '2023-12-07 22:34:09.920348'),
        (1, 0xF6763B92539847209FB75C155F6851F4, 'Kristina Стоянова', 'krisagriza@gmail.com', 'application', '', '2023-12-29 17:28:05.954979');

-- Changeset kristina:2024-01-23-insert-application-data
insert into vzk_request.application_request (id, contact_request, applied_game, application_type, gender, birthday, country_origin, description, profile_url, applied_role, max_rank)
values  (0x24E68465EE6A4F8DA567B2C08B40E01A, 0x7145865486EA49B881EB402671BD561B, 0x8EB23B3242D14C23AFDD5F3D2FA99E25, 'Manager', '0', '2003-12-18', 'Bahrain', 'adaDASASA', '', '', ''),
        (0x294F2BF6A7A24D289ACC22162D6F3294, 0xF6763B92539847209FB75C155F6851F4, 0xFD984D169CBB46B5B76107E7D498F8B4, 'Player', '1', '1992-12-12', 'Antarctica', 'zdadadasasasas', 'https://www.op.gg/summoners/euw/A%CF%87olotl-EUW', 'ADC', 'Emerald IV'),
        (0x779030A2C2E143C0A9E90406A9A294E4, 0x5289166EC3724D4B94BFB62EAF5D88C0, 0xFD984D169CBB46B5B76107E7D498F8B4, 'player', '0', '2003-12-04', 'UK', 'I am cool', 'https://www.op.gg/summoners/euw/A%CF%87olotl-EUW', 'ADC', 'Platinum 1'),
        (0x77994ED5E4DB4BFEBADDE9C4C901716D, 0xB076B01F9BC0495B87A55E8C36B92F14, 0xFD984D169CBB46B5B76107E7D498F8B4, 'manager', '0', '2003-12-04', 'UK', 'I am cool', null, null, null),
        (0x7E2BC8318FA44DA9A8E06E0B2CF4D5BC, 0x0A989B6AF8E94BE4AA4A4FAFE2673C06, 0xFD984D169CBB46B5B76107E7D498F8B4, 'Player', '1', '1999-03-16', 'Bulgaria', 'akudkaudskauskas', 'https://www.op.gg/summoners/euw/A%CF%87olotl-EUW', 'ADC', 'Platinum I'),
        (0x8BA3A71BC3F14E3A99339F8514459AA6, 0x8F593E38458D4A659E3865158DAB8400, 0xFD984D169CBB46B5B76107E7D498F8B4, 'manager', '0', '2003-12-06', 'UK', 'I am cool', null, null, null),
        (0x9B41A3EDD97146E294D4CCA1C5D884E9, 0x95EAC0457BD84F93AAAF3B5EFFE461B8, 0x8EB23B3242D14C23AFDD5F3D2FA99E25, 'Other', '2', '1973-08-12', 'Ghana', 'wsfsfsfsdf', '', '', ''),
        (0xB40756276B7F41DAAC27FCB8BC7E9D94, 0x85BECE6E75BE44E0AA4A413F5A0DE58F, 0xFD984D169CBB46B5B76107E7D498F8B4, 'Player', '1', '1999-03-16', 'Bulgaria', 'akudkaudskauskas', 'https://www.op.gg/summoners/euw/A%CF%87olotl-EUW', 'ADC', 'Platinum I'),
        (0xBE8A598DEAE64A92BF4432B88414F8B3, 0x913D0A2ECAB94C88A98ADFD0D5167AE1, 0xFD984D169CBB46B5B76107E7D498F8B4, 'Player', '1', '1999-03-16', 'Bulgaria', 'msjksjfksjdksjdks', '', '', ''),
        (0xE7FE59E2F9BF4305B4AE5DCC1407FD73, 0xB05900A1521A4EC19D1D8671E8722B69, 0xFD984D169CBB46B5B76107E7D498F8B4, 'player', '0', '2003-12-04', 'UK', 'I am cool', 'https://www.op.gg/summoners/euw/A%CF%87olotl-EUW', 'ADC', 'Platinum 1');
