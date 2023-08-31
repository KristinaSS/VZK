package com.vzk.request.constants;

public enum Games {
    LEAGUE_OF_LEGENDS("League of Legends"),
    VALORANT("Valorant");

    private final String label;

    Games(String label) {
        this.label = label;
    }

    String getLabel(){
        return label;
    }
}
