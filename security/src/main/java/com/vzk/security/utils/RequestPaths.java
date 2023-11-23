package com.vzk.security.utils;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class RequestPaths {
    public static final String SECURITY_LOGIN = "/api/v1/auth/login";
    public static final String SECURITY_SIGNUP = "/api/v1/auth/signup";
    public static final String ACCOUNT_GET_ALL_ACCOUNTS = "/account/all";
    public static final String ACCOUNT_GET_BY_ID = "/account/{id}";
    public static final String ACCOUNT_UPDATE_USER = "/account/update";
    public static final String GAME_GET_ALL_GAMES = "/game/all";

    public static final Map<String, String> PATHS_PERMISSIONS_MAP;

    static {
        Map<String, String> tempPathPermissionMap = new HashMap<>();
        //guest permissions
        tempPathPermissionMap.put(GAME_GET_ALL_GAMES, "guest-permissions");
        tempPathPermissionMap.put(SECURITY_LOGIN, "guest-permissions");
        tempPathPermissionMap.put(SECURITY_SIGNUP, "guest-permissions");

        //admin permissions
        tempPathPermissionMap.put(ACCOUNT_GET_ALL_ACCOUNTS, "view-all-profiles");

        //user permissions
        tempPathPermissionMap.put(ACCOUNT_GET_BY_ID, "view-user-profile");
        tempPathPermissionMap.put(ACCOUNT_UPDATE_USER, "edit-user-profile");

        //todo add all permissions
        PATHS_PERMISSIONS_MAP = Collections.unmodifiableMap(tempPathPermissionMap);
    }
}
