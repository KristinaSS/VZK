package com.vzk.events.feign;

import org.openapitools.model.GameDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

import static com.vzk.events.utils.Constants.*;

@FeignClient(name = GAME_SERVICE_NAME, url = GAME_SERVICE_BASE_URL)
public interface GameClient {

    @GetMapping(GAMES_GET_ALL_URL)
    ResponseEntity<List<GameDTO>> getAllGames();
}
