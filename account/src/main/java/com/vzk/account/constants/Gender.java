package com.vzk.account.constants;

import lombok.Getter;

@Getter
public enum Gender {
    MALE(0),
    FEMALE(1),
    OTHER(2);

    private final int ordinalValue;

    Gender(int ordinalValue) {
        this.ordinalValue = ordinalValue;
    }
}

