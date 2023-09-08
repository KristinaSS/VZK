package com.vzk.account.constants;

public enum Game {
    LEAGUE_OF_LEGENDS, VALORANT;

    public static Game findGame(String game) {
        switch (game) {
            case "League of Legends":
                return LEAGUE_OF_LEGENDS;
            case "Valorant":
                return VALORANT;
        }
        return null;
    }
}
