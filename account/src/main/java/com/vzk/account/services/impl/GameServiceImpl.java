package com.vzk.account.services.impl;

import com.vzk.account.exceptions.EntityNotFoundException;
import com.vzk.account.models.Game;
import com.vzk.account.repos.GameRepository;
import com.vzk.account.services.GameService;
import org.openapitools.model.CreateGameDTO;
import org.openapitools.model.GameDTO;
import org.openapitools.model.GameUpdatedDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import static com.vzk.account.mapper.GameMapper.GAME_MAPPER;

@Service
public class GameServiceImpl implements GameService {

    private static final String ENTITY = "game";

    @Autowired
    private GameRepository gameRepository;

    @Override
    public GameDTO createGame(CreateGameDTO createGameDTO) {
        Game createdGame = GAME_MAPPER.mapToModel(createGameDTO);

        Game savedGame = gameRepository.save(createdGame);
        return GAME_MAPPER.mapToDTO(savedGame);
    }

    @Override
    public List<GameDTO> getAllGames() {
        return gameRepository.findAll().stream()
                .map(GAME_MAPPER::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public void updateGame(GameUpdatedDTO gameUpdatedDTO) {
        Game game = GAME_MAPPER.mapToModel(gameUpdatedDTO);

        gameRepository.save(game);
    }

    @Override
    public GameDTO getGameByID(String gameId) {
        return GAME_MAPPER.mapToDTO(findGame(gameId));
    }

    private Game findGame(String id) {
        return gameRepository.findById(UUID.fromString(id)).orElseThrow(
                () -> new EntityNotFoundException(ENTITY, "id", id));
    }
}
