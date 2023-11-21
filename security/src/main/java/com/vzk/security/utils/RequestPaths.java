package com.vzk.security.utils;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class RequestPaths {

    public static final String ACCOUNT_GET_ALL_ACCOUNTS = "/account/all";

    public static final String ACCOUNT_GET_BY_ID = "/account/{id}";

    public static final String ACCOUNT_UPDATE_USER = "/account/update";

    public static final Map<String, String> PATHS_PERMISSIONS_MAP;

    static {
        Map<String, String> tempMap = new HashMap<>();
        //admin permissions
        tempMap.put(ACCOUNT_GET_ALL_ACCOUNTS, "view-all-profiles");

        //user permissions
        tempMap.put(ACCOUNT_GET_BY_ID, "view-user-profile");
        tempMap.put(ACCOUNT_UPDATE_USER, "edit-user-profile");

        //todo add all permissions
        PATHS_PERMISSIONS_MAP = Collections.unmodifiableMap(tempMap);
    }
}
