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
import java.util.UUID;


@RestController
public class PlayerController implements PlayerApi {

    @Autowired
    private PlayerService playerService;

    @Override //works
    public ResponseEntity<PlayerDTO> createPlayer(CreatePlayerDTO createPlayerDTO) {
        return ResponseEntity.ok(playerService.createPlayer(createPlayerDTO));
    }

    @Override
    public ResponseEntity<Void> deactivatePlayer(UUID player) {
        playerService.deletePlayer(String.valueOf(player));
        return ResponseEntity.ok(null);
    }


    @Override //works
    public ResponseEntity<List<PlayerDTO>> getAllActivePlayers() {
        return ResponseEntity.ok(playerService.getAllActivePlayers());
    }

    @Override //works
    public ResponseEntity<List<PlayerDTO>> getAllPlayers() {
        return ResponseEntity.ok(playerService.getAllPlayers());
    }

    @Override
    public ResponseEntity<PlayerDTO> getPlayerByEmail(String player) {
        return ResponseEntity.ok(playerService.getPlayerByEmail(player));
    }


    @Override
    public ResponseEntity<PlayerDTO> getPlayerById(UUID player) {
        return ResponseEntity.ok(playerService.getPlayerById(player.toString()));
    }

    @Override
    public ResponseEntity<Void> updatePlayer(UpdatePlayerDTO updatePlayerDTO) {
        playerService.updatePlayer(updatePlayerDTO);
        return ResponseEntity.ok(null);
    }
}
