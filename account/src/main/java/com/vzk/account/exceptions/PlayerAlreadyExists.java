package com.vzk.account.exceptions;

public class PlayerAlreadyExists extends RuntimeException{
    private static final String MESSAGE_TEMPLATE = "Player with account with id: %s already exists";
    public PlayerAlreadyExists(String id) {
        super(String.format(MESSAGE_TEMPLATE, id));
    }
}
