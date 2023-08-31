package com.vzk.request.constants.ranks;

import com.vzk.request.constants.Rank;

public enum ValorantRanks implements Rank {
    IRON_III("Iron III"),
    IRON_II("Iron II"),
    IRON_I("Iron I"),
    BRONZE_III("Bronze III"),
    BRONZE_II("Bronze II"),
    BRONZE_I("Bronze I"),
    SILVER_III("Silver III"),
    SILVER_II("Silver II"),
    SILVER_I("Silver I"),
    GOLD_IV("Gold IV"),
    GOLD_III("Gold III"),
    GOLD_II("Gold II"),
    GOLD_I("Gold I"),
    PLATINUM_III("Platinum III"),
    PLATINUM_II("Platinum II"),
    PLATINUM_I("Platinum I"),
    DIAMOND_IV("Diamond IV"),
    DIAMOND_III("Diamond III"),
    DIAMOND_II("Diamond II"),
    DIAMOND_I("Diamond I"),
    ASCENDANT_III("Ascendant III"),
    ASCENDANT_II("Ascendant II"),
    ASCENDANT_I("Ascendant I"),
    IMMORTAL_III("Immortal III"),
    IMMORTAL_II("Immortal II"),
    IMMORTAL_I("Immortal I"),
    RADIANT("Radiant");

    private final String label;

    ValorantRanks(String label) {
        this.label = label;
    }

    @Override
    public String getLabel() {
        return label;
    }
}
