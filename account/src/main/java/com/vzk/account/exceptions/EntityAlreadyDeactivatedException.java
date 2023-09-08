package com.vzk.account.exceptions;

public class EntityAlreadyDeactivatedException extends RuntimeException {

    private static final String MESSAGE_TEMPLATE = "%s with this id: %d is already deactivated";
    public EntityAlreadyDeactivatedException(String entity, int id) {
        super(String.format(MESSAGE_TEMPLATE, entity, id));
    }
}
