package com.vzk.request.constants.ranks;

import com.vzk.request.constants.Rank;

public enum LeagueOfLegendsRanks implements Rank {
    IRON_IV("Iron IV"),
    IRON_III("Iron III"),
    IRON_II("Iron II"),
    IRON_I("Iron I"),
    BRONZE_IV("Bronze IV"),
    BRONZE_III("Bronze III"),
    BRONZE_II("Bronze II"),
    BRONZE_I("Bronze I"),
    SILVER_IV("Silver IV"),
    SILVER_III("Silver III"),
    SILVER_II("Silver II"),
    SILVER_I("Silver I"),
    GOLD_IV("Gold IV"),
    GOLD_III("Gold III"),
    GOLD_II("Gold II"),
    GOLD_I("Gold I"),
    PLATINUM_IV("Platinum IV"),
    PLATINUM_III("Platinum III"),
    PLATINUM_II("Platinum II"),
    PLATINUM_I("Platinum I"),
    EMERALD_IV("Emerald IV"),
    EMERALD_III("Emerald III"),
    EMERALD_II("Emerald II"),
    EMERALD_I("Emerald I"),
    DIAMOND_IV("Diamond IV"),
    DIAMOND_III("Diamond III"),
    DIAMOND_II("Diamond II"),
    DIAMOND_I("Diamond I"),
    MASTER("Master"),
    GRAND_MASTER("Grand Master"),
    CHALLENGER("Challenger");

    private final String label;

    LeagueOfLegendsRanks(String label) {
        this.label = label;
    }

    @Override
    public String getLabel() {
        return label;
    }
}
