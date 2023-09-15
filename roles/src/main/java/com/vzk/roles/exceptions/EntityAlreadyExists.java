package com.vzk.roles.exceptions;

import java.util.UUID;

public class EntityAlreadyExists extends RuntimeException{
    private static final String MESSAGE_TEMPLATE = "%s with account with role id: %s and %s id: %s already exists";
    public EntityAlreadyExists(String entity, String combEntity, UUID id, UUID accId) {
        super(String.format(MESSAGE_TEMPLATE,entity, id, combEntity, accId));
    }
}
