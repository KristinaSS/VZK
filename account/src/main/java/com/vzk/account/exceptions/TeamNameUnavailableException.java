package com.vzk.account.exceptions;

public class TeamNameUnavailableException extends RuntimeException {
    private static final String MESSAGE_TEMPLATE = "Team with this name: %s already exists";
    public TeamNameUnavailableException(String name) {
        super(String.format(MESSAGE_TEMPLATE, name));
    }
}
