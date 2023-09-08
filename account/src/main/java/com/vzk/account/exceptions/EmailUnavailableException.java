package com.vzk.account.exceptions;

public class EmailUnavailableException extends RuntimeException {
    private static final String MESSAGE_TEMPLATE = "Account with this email: %s already exists";
    public EmailUnavailableException(String email) {
        super(String.format(MESSAGE_TEMPLATE, email));
    }
}
