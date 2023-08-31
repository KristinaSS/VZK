package com.vzk.request.constants.roles;

import com.vzk.request.constants.Role;

public enum LeagueOfLegendsRoles implements Role {
    TOP("Top"),
    JUNGLE("Jungle"),
    MID("Mid"),
    ADC("ADC"),
    SUPPORT("Support");

    private final String label;

    LeagueOfLegendsRoles(String label) {
        this.label = label;
    }
    @Override
    public String getLabel() {
        return label;
    }
}
