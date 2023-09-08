package com.vzk.account.exceptions;

public class PlayerAlreadyExists extends RuntimeException{
    private static final String MESSAGE_TEMPLATE = "Player with account with id: %d already exists";
    public PlayerAlreadyExists(int id) {
        super(String.format(MESSAGE_TEMPLATE, id));
    }
}
