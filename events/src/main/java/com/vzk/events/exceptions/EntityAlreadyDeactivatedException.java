package com.vzk.events.exceptions;

import java.util.UUID;

public class EntityAlreadyDeactivatedException extends RuntimeException {

    private static final String MESSAGE_TEMPLATE = "%s with this id: %s is already deactivated";
    public EntityAlreadyDeactivatedException(String entity, UUID id) {
        super(String.format(MESSAGE_TEMPLATE, entity, id));
    }
}
