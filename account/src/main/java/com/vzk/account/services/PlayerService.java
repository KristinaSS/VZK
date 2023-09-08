package com.vzk.account.services;

import org.openapitools.model.*;

import java.util.List;

public interface PlayerService {
    PlayerDTO createPlayer(CreatePlayerDTO createPlayerDTO);

    void deletePlayer(int id);

    PlayerDTO getPlayerByEmail(String email);

    PlayerDTO getPlayerById(int id);

    List<PlayerDTO> getAllPlayers();

    List<PlayerDTO> getAllActivePlayers();

    void updatePlayer(UpdatePlayerDTO updatePlayerDTO);
}
