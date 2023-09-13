package com.vzk.roles.exceptions;

public class EntityAlreadyExists extends RuntimeException{
    private static final String MESSAGE_TEMPLATE = "%s with account with role id: %d and %s id: %d already exists";
    public EntityAlreadyExists(String entity, String combEntity, int id, int accId) {
        super(String.format(MESSAGE_TEMPLATE,entity, id, combEntity, accId));
    }
}
