package com.vzk.security.utils;

import java.util.UUID;

public class Constants {
    public static final String ACCOUNT_SERVICE_BASE_URL = "http://localhost:8080";

    public static final String ACCOUNT_GET_ACCOUNT_BY_EMAIL_URL = "/account/email/{email}";

    public static final String ACCOUNT_CREATE_ACCOUNT_URL = "/account/email/{email}";

    public static final String ACCOUNT_SERVICE_NAME = "account-service";


    public static final String ROLES_SERVICE_BASE_URL = "http://localhost:8084";

    public static final String ROLES_GET_ROLES_BY_ACC_ID_URL = "/role/account/{id}";

    public static final String ROLES_GET_PERMISSION_BY_ROLE_ID_URL = "/role/{id}/permissions";

    public static final String ROLES_GIVE_ACCOUNT_ROLE_URL = "/role/account/{acc_id}/role/{role_id}";

    public static final String ROLES_SERVICE_NAME = "roles-service";

    public static final UUID DEFAULT_USER_ROLE_UUID = UUID.fromString("ca182baf-017d-4c4f-9769-1d82fac073d8");

    public static final int ONE_HOUR_MILLIS = 1000 * 60;
}
