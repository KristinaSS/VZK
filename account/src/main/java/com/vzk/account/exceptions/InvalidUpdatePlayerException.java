package com.vzk.account.exceptions;

public class InvalidUpdatePlayerException extends RuntimeException{
    private static final String MESSAGE_TEMPLATE = "Cannot change player email to: %s";
    public InvalidUpdatePlayerException(String email) {
        super(String.format(MESSAGE_TEMPLATE, email));
    }
}
