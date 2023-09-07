package com.vzk.account.constants;

public enum Games {
    LEAGUE_OF_LEGENDS("League of Legends"),
    VALORANT("Valorant");

    private final String label;

    Games(String label) {
        this.label = label;
    }

    public String getLabel() {
        return label;
    }

    public static Games findGame(String game){
        switch (game){
            case "League of Legends":
                return LEAGUE_OF_LEGENDS;
            case  "Valorant":
                return VALORANT;
        }
        return null;
    }
}
