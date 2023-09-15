package com.vzk.account.controller;

import com.vzk.account.services.PlayerService;
import org.openapitools.api.PlayerApi;
import org.openapitools.model.CreatePlayerDTO;
import org.openapitools.model.PlayerDTO;
import org.openapitools.model.UpdatePlayerDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class PlayerController implements PlayerApi {

    @Autowired
    private PlayerService playerService;

    @Override
    public ResponseEntity<PlayerDTO> createPlayer(CreatePlayerDTO createPlayerDTO) {
        return ResponseEntity.ok(playerService.createPlayer(createPlayerDTO));
    }

    @Override
    public ResponseEntity<Void> deactivatePlayer(String player) {
        playerService.deletePlayer(player);
        return ResponseEntity.ok(null);
    }

    @Override
    public ResponseEntity<List<PlayerDTO>> getAllActivePlayers() {
        return ResponseEntity.ok(playerService.getAllActivePlayers());
    }

    @Override
    public ResponseEntity<List<PlayerDTO>> getAllPlayers() {
        return ResponseEntity.ok(playerService.getAllPlayers());
    }

    @Override
    public ResponseEntity<PlayerDTO> getPlayerByEmail(String player) {
        return ResponseEntity.ok(playerService.getPlayerByEmail(player));
    }

    @Override
    public ResponseEntity<PlayerDTO> getPlayerById(String player) {
        return ResponseEntity.ok(playerService.getPlayerById(player));
    }

    @Override
    public ResponseEntity<Void> updatePlayer(UpdatePlayerDTO updatePlayerDTO) {
        playerService.updatePlayer(updatePlayerDTO);
        return ResponseEntity.ok(null);
    }
}
