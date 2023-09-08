package com.vzk.account.exceptions;

import java.util.NoSuchElementException;

public class EntityNotFoundException extends NoSuchElementException {

    private static final String MESSAGE_TEMPLATE = "No %s found with %s: %s";

    public EntityNotFoundException(String entity, String infoType, String info) {
        super(String.format(MESSAGE_TEMPLATE, entity, infoType, info));
    }
}
