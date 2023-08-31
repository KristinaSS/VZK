package com.vzk.request.constants.roles;

import com.vzk.request.constants.Role;

public enum ValorantRoles implements Role {

    SENTINEL("Sentinel"),
    DUELIST("Duelist"),
    CONTROLLER("Controller"),
    INITIATOR("Initiator");

    private final String label;

    ValorantRoles(String label) {
        this.label = label;
    }
    @Override
    public String getLabel() {
        return label;
    }
}
