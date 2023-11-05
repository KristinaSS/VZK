package com.vzk.security.exceptions;

import java.util.NoSuchElementException;

public class EntityNotFoundException extends NoSuchElementException {

    private static final String MESSAGE_TEMPLATE = "No user found with email : %s";

    public EntityNotFoundException(String info) {
        super(String.format(MESSAGE_TEMPLATE, info));
    }
}
