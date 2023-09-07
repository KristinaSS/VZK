package com.vzk.account.controller;

import org.openapitools.api.PlayerApi;
import org.openapitools.model.CreatePlayerDTO;
import org.openapitools.model.PlayerDTO;
import org.openapitools.model.UpdatePlayerDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class PlayerController implements PlayerApi {
    @Override
    public ResponseEntity<PlayerDTO> createPlayer(CreatePlayerDTO createPlayerDTO) {
        return null;
    }

    @Override
    public ResponseEntity<Void> deactivatePlayer(Integer player) {
        return null;
    }

    @Override
    public ResponseEntity<List<PlayerDTO>> getAllActivePlayers() {
        return null;
    }

    @Override
    public ResponseEntity<List<PlayerDTO>> getAllPlayers() {
        return null;
    }

    @Override
    public ResponseEntity<PlayerDTO> getPlayerByEmail(String player) {
        return null;
    }

    @Override
    public ResponseEntity<PlayerDTO> getPlayerById(Integer player) {
        return null;
    }

    @Override
    public ResponseEntity<Void> updatePlayer(UpdatePlayerDTO updatePlayerDTO) {
        return null;
    }
}
