package com.vzk.account.exceptions;

public class EntityAlreadyDeactivatedException extends RuntimeException {

    private static final String MESSAGE_TEMPLATE = "%s with this id: %s is already deactivated";
    public EntityAlreadyDeactivatedException(String entity, String id) {
        super(String.format(MESSAGE_TEMPLATE, entity, id));
    }
}
