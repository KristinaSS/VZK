package com.vzk.account.controller;

import com.vzk.account.services.GameService;
import org.openapitools.api.GameApi;
import org.openapitools.model.CreateGameDTO;
import org.openapitools.model.GameDTO;
import org.openapitools.model.GameUpdatedDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class GameController implements GameApi {
    @Autowired
    private GameService gameService;

    @Override //works
    public ResponseEntity<GameDTO> createGame(CreateGameDTO createGameDTO) {
        return ResponseEntity.ok(gameService.createGame(createGameDTO));
    }

    @Override //works
    public ResponseEntity<List<GameDTO>> getAllGames() {
        return ResponseEntity.ok(gameService.getAllGames());
    }

    @Override
    public ResponseEntity<Void> updateGame(GameUpdatedDTO gameUpdatedDTO) {
        gameService.updateGame(gameUpdatedDTO);
        return ResponseEntity.ok(null);
    }
}
