package com.vzk.account.constants;

import java.util.UUID;

public class Constants {
    public static final String ROLES_GET_ALL_ACTIVE_URL = "/roles/all/active";

    public static final String ROLES_DELETE_ACC_ROLE_URL = "/role/account/{acc_id}/delete/{role_id}";

    public static final String ROLES_SERVICE_NAME = "roles-service";

    public static final String ROLES_SERVICE_BASE_URL = "http://localhost:8083";

    public static final String ROLES_GIVE_ACCOUNT_ROLE_URL = "/role/account/{acc_id}/role/{role_id}";

    public static final UUID DEFAULT_USER_ROLE_UUID = UUID.fromString("ca182baf-017d-4c4f-9769-1d82fac073d8");
}
