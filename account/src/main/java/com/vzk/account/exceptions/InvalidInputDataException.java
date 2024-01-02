package com.vzk.account.exceptions;

public class InvalidInputDataException extends RuntimeException{
    private static final String MESSAGE_TEMPLATE = "Invalid Input data for changing account email";
    public InvalidInputDataException() {
        super(MESSAGE_TEMPLATE);
    }
}
