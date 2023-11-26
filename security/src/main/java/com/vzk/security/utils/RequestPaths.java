package com.vzk.security.utils;

import java.util.*;

public class RequestPaths {
    //PATHS
    public static final String SECURITY_LOGIN = "/api/v1/auth/login";
    public static final String SECURITY_SIGNUP = "/api/v1/auth/signup";
    public static final String ACCOUNT_GET_ALL_ACCOUNTS = "/account/all";
    public static final String ACCOUNT_GET_BY_ID = "/account/{id}";
    public static final String ACCOUNT_UPDATE_USER = "/account/update";
    public static final String ACCOUNT_GET_BY_EMAIL = "/account/email/%7Bemail%7D";
    public static final String GAME_GET_ALL_GAMES = "/game/all";

    //PERMISSIONS
    public static final String ADMIN_VIEW_PROFILES = "view-user-profile-non-owner";
    public static final String USER_VIEW_PROFILES = "view-user-profile";

    public static final Map<String, List<String>> PATHS_PERMISSIONS_MAP;

    public static final List<String> CHECK_PATHS_LIST;

    static {
        List<String> tempCheckPathsList = new ArrayList<>();
        tempCheckPathsList.add(ACCOUNT_GET_BY_EMAIL);
        tempCheckPathsList.add(ACCOUNT_GET_BY_ID);



        Map<String, List<String>> tempPathPermissionMap = new HashMap<>();
        //guest permissions
        tempPathPermissionMap.put(GAME_GET_ALL_GAMES, Collections.singletonList("guest-permissions"));
        tempPathPermissionMap.put(SECURITY_LOGIN, Collections.singletonList("guest-permissions"));
        tempPathPermissionMap.put(SECURITY_SIGNUP, Collections.singletonList("guest-permissions"));

        //user permissions
        tempPathPermissionMap.put(ACCOUNT_UPDATE_USER, Collections.singletonList("edit-user-profile"));

        //player permissions

        //caster permissions

        //coach permissions

        //manager permissions

        //partner permissions

        //admin permissions
        tempPathPermissionMap.put(ACCOUNT_GET_ALL_ACCOUNTS, Collections.singletonList("view-all-profiles"));

        //mix permissions
        tempPathPermissionMap.put(ACCOUNT_GET_BY_EMAIL, Arrays.asList(ADMIN_VIEW_PROFILES, USER_VIEW_PROFILES));
        tempPathPermissionMap.put(ACCOUNT_GET_BY_ID, Arrays.asList(ADMIN_VIEW_PROFILES, USER_VIEW_PROFILES));

        //todo add all permissions
        PATHS_PERMISSIONS_MAP = Collections.unmodifiableMap(tempPathPermissionMap);
        CHECK_PATHS_LIST = Collections.unmodifiableList(tempCheckPathsList);
    }
}
