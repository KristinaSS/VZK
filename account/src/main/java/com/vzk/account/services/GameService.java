package com.vzk.account.services;

import org.openapitools.model.CreateGameDTO;
import org.openapitools.model.GameDTO;
import org.openapitools.model.GameUpdatedDTO;

import java.util.List;

public interface GameService {
    GameDTO createGame(CreateGameDTO createGameDTO);

    List<GameDTO> getAllGames();

    void updateGame(GameUpdatedDTO gameUpdatedDTO);

    GameDTO getGameByID(String string);
}
