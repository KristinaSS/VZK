package com.vzk.security.utils;

import java.util.*;

public class RequestPaths {
    //PATHS

    //MIX
    public static final String ACCOUNT_GET_BY_ID = "/account/{id}";
    public static final String ACCOUNT_GET_SHORT_BY_EMAIL = "/account/short/email/%7Bemail%7D";

    //GUEST
    public static final String SECURITY_LOGIN = "/api/v1/auth/login";
    public static final String SECURITY_SIGNUP = "/api/v1/auth/signup";
    public static final String SECURITY_VERIFY = "/api/v1/auth/verify";
    public static final String SECURITY_RESEND = "/api/v1/auth/resend";
    public static final String GAME_GET_ALL_GAMES = "/game/all";
    public static final String TEAM_GET_ALL_PL_BY_TEAM = "/team/%7Bid%7D/players";
    public static final String NEWS_GET_ALL_ACTIVE_ARTICLES = "/article/all/active";
    public static final String NEWS_GET_ALL_ACTIVE_FILTER_ARTICLES = "/article/all/filtered";
    public static final String NEWS_GET_ACTIVE_ARTICLE_BY_ID = "/article/%7Bid%7D";
    public static final String TEAM_GET_ALL_ACTIVE_TEAMS = "/team/all/active";
    public static final String EVENTS_GET_ALL_ACTIVE_EVENTS = "/event/all/active";
    public static final String RESULT_GET_ALL_ACTIVE_RESULTS = "/result/all/active";
    public static final String REQUEST_CREATE_CONTACT_REQUEST = "/request/contact/create";
    public static final String REQUEST_CREATE_APPLICATION_REQUEST = "/request/application/create";

    //ADMIN
    public static final String ACCOUNT_GET_ALL_ACCOUNTS = "/account/all";
    public static final String ACCOUNT_GET_ALL_ACCOUNTS_ACTIVE = "/account/all/active";
    public static final String ACCOUNT_UPDATE_ACC_ADMIN = "/account/update/admin";


    //USER
    public static final String SECURITY_EMAIL = "/api/v1/auth/email";
    public static final String SECURITY_ROLE = "/api/v1/auth/role";
    public static final String ACCOUNT_UPDATE_ACC_USER = "/account/update/user";
    public static final String SECURITY_UPDATE_ACC_USER = "/api/v1/auth/user/update";

    //PLAYER
    public static final String PLAYER_GET_SHORT_BY_EMAIL = "/player/short/%7Bemail%7D";
    public static final String PLAYER_UPDATE_ACC_USER = "/player/update/user";

    //MANAGER
    public static final String PLAYER_GET_ALL_ACTIVE = "/player/all/active";
    public static final String PLAYER_UPDATE_ACC_ADMIN = "/player/update/admin";

    //PERMISSIONS
    public static final String ADMIN_VIEW_PROFILES = "view-user-profile-non-owner";
    public static final String USER_VIEW_PROFILES = "view-user-profile";
    public static final String GUEST_PERMISSIONS = "guest-permissions";
    public static final String VIEW_ALL_PROFILES = "view-all-profiles";
    public static final String VIEW_ALL_PLAYERS = "view-all-player";
    public static final String NON_USER_VIEW_PLAYER = "view-player-profile-non-owner";
    public static final String USER_VIEW_PLAYER = "view-player-profile";
    public static final String EDIT_USER_PROFILE = "edit-user-profile";
    public static final String EDIT_PLAYER_PROFILE = "edit-player-profile";
    public static final String EDIT_USER_ADMIN = "edit-user-admin";
    public static final String EDIT_PLAYER_ADMIN = "edit-player-admin";



    public static final Map<String, List<String>> PATHS_PERMISSIONS_MAP;
    public static final List<String> VIEW_PROFILE_PATHS_LIST;
    public static final List<String> VIEW_PLAYER_PATHS_LIST;

    static {
        List<String> tempViewProfilesPathsList = new ArrayList<>();
        tempViewProfilesPathsList.add(ACCOUNT_GET_SHORT_BY_EMAIL);
        tempViewProfilesPathsList.add(ACCOUNT_GET_BY_ID);

        List<String> tempViewPlayerPathsList = new ArrayList<>();
        tempViewPlayerPathsList.add(PLAYER_GET_SHORT_BY_EMAIL);


        Map<String, List<String>> tempPathPermissionMap = new HashMap<>();
        //guest permissions
        tempPathPermissionMap.put(GAME_GET_ALL_GAMES, Collections.singletonList(GUEST_PERMISSIONS));
        tempPathPermissionMap.put(SECURITY_LOGIN, Collections.singletonList(GUEST_PERMISSIONS));
        tempPathPermissionMap.put(SECURITY_SIGNUP, Collections.singletonList(GUEST_PERMISSIONS));
        tempPathPermissionMap.put(SECURITY_VERIFY, Collections.singletonList(GUEST_PERMISSIONS));
        tempPathPermissionMap.put(SECURITY_RESEND, Collections.singletonList(GUEST_PERMISSIONS));
        tempPathPermissionMap.put(TEAM_GET_ALL_PL_BY_TEAM, Collections.singletonList(GUEST_PERMISSIONS));
        tempPathPermissionMap.put(TEAM_GET_ALL_ACTIVE_TEAMS, Collections.singletonList(GUEST_PERMISSIONS));
        tempPathPermissionMap.put(NEWS_GET_ALL_ACTIVE_ARTICLES, Collections.singletonList(GUEST_PERMISSIONS));
        tempPathPermissionMap.put(NEWS_GET_ACTIVE_ARTICLE_BY_ID, Collections.singletonList(GUEST_PERMISSIONS));
        tempPathPermissionMap.put(EVENTS_GET_ALL_ACTIVE_EVENTS, Collections.singletonList(GUEST_PERMISSIONS));
        tempPathPermissionMap.put(RESULT_GET_ALL_ACTIVE_RESULTS, Collections.singletonList(GUEST_PERMISSIONS));
        tempPathPermissionMap.put(REQUEST_CREATE_CONTACT_REQUEST, Collections.singletonList(GUEST_PERMISSIONS));
        tempPathPermissionMap.put(REQUEST_CREATE_APPLICATION_REQUEST, Collections.singletonList(GUEST_PERMISSIONS));
        tempPathPermissionMap.put(NEWS_GET_ALL_ACTIVE_FILTER_ARTICLES, Collections.singletonList(GUEST_PERMISSIONS));

        //user permissions
        tempPathPermissionMap.put(SECURITY_EMAIL, Collections.singletonList(USER_VIEW_PROFILES));
        tempPathPermissionMap.put(SECURITY_ROLE, Collections.singletonList(USER_VIEW_PROFILES));
        tempPathPermissionMap.put(ACCOUNT_UPDATE_ACC_USER, Collections.singletonList(EDIT_USER_PROFILE));
        tempPathPermissionMap.put(SECURITY_UPDATE_ACC_USER, Collections.singletonList(EDIT_USER_PROFILE));

        //player permissions
        tempPathPermissionMap.put(PLAYER_UPDATE_ACC_USER, Collections.singletonList(EDIT_PLAYER_PROFILE));

        //caster permissions

        //coach permissions

        //manager permissions
        tempPathPermissionMap.put(PLAYER_GET_ALL_ACTIVE, Collections.singletonList(VIEW_ALL_PLAYERS));
        tempPathPermissionMap.put(PLAYER_UPDATE_ACC_ADMIN, Collections.singletonList(EDIT_PLAYER_ADMIN));

        //partner permissions

        //admin permissions
        tempPathPermissionMap.put(ACCOUNT_GET_ALL_ACCOUNTS, Collections.singletonList(VIEW_ALL_PROFILES));
        tempPathPermissionMap.put(ACCOUNT_GET_ALL_ACCOUNTS_ACTIVE, Collections.singletonList(VIEW_ALL_PROFILES));
        tempPathPermissionMap.put(ACCOUNT_UPDATE_ACC_ADMIN, Collections.singletonList(EDIT_USER_ADMIN));

        //mix permissions
        tempPathPermissionMap.put(ACCOUNT_GET_SHORT_BY_EMAIL, Arrays.asList(ADMIN_VIEW_PROFILES, USER_VIEW_PROFILES));
        tempPathPermissionMap.put(ACCOUNT_GET_BY_ID, Arrays.asList(ADMIN_VIEW_PROFILES, USER_VIEW_PROFILES));
        tempPathPermissionMap.put(PLAYER_GET_SHORT_BY_EMAIL, Arrays.asList(USER_VIEW_PLAYER, NON_USER_VIEW_PLAYER));

        PATHS_PERMISSIONS_MAP = Collections.unmodifiableMap(tempPathPermissionMap);
        VIEW_PROFILE_PATHS_LIST = Collections.unmodifiableList(tempViewProfilesPathsList);
        VIEW_PLAYER_PATHS_LIST = Collections.unmodifiableList(tempViewPlayerPathsList);
    }
}
