package com.vzk.account.services.impl;

import com.vzk.account.exceptions.EntityAlreadyDeactivatedException;
import com.vzk.account.exceptions.EntityNotFoundException;
import com.vzk.account.exceptions.InvalidUpdatePlayerException;
import com.vzk.account.exceptions.PlayerAlreadyExists;
import com.vzk.account.models.Account;
import com.vzk.account.models.AccountDetails;
import com.vzk.account.repos.AccountDetailsRepository;
import com.vzk.account.repos.AccountRepository;
import com.vzk.account.services.PlayerService;
import org.openapitools.model.CreatePlayerDTO;
import org.openapitools.model.PlayerDTO;
import org.openapitools.model.UpdatePlayerDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import static com.vzk.account.mapper.PlayerMapper.PLAYER_MAPPER;

@Service
public class PlayerServiceImpl implements PlayerService {
    private static final String ENTITY = "player";

    @Autowired
    private AccountDetailsRepository accountDetailsRepository;

    @Autowired
    private AccountRepository accountRepository;

    @Override
    public PlayerDTO createPlayer(CreatePlayerDTO createPlayerDTO) {
        AccountDetails createdPlayer = PLAYER_MAPPER.mapToModel(createPlayerDTO, null);
        Account linkedAccount = accountRepository.findAccountByEmail(createPlayerDTO.getEmail());
        linkedAccount.setActive(true);

        //check if account exists
        verifyAccountExists(linkedAccount, createPlayerDTO.getEmail());

        //check if account available
        verifyNoPlayerWithAccountExists(linkedAccount);

        accountDetailsRepository.save(createdPlayer);

        return PLAYER_MAPPER.mapToDTO(linkedAccount, createdPlayer);
    }

    @Override
    public void deletePlayer(String id) {
        AccountDetails accountDetails = findPlayer(id);

        //verify if deactivated
        verifyIfPlayerActive(accountDetails);

        accountDetails.setTeam(null);
    }

    @Override
    public PlayerDTO getPlayerByEmail(String email) {
        Account linkedAccount = accountRepository.findAccountByEmail(email);

        //check if account exists
        verifyAccountExists(linkedAccount, email);

        AccountDetails accountDetails = findPlayer(linkedAccount, email);

        return PLAYER_MAPPER.mapToDTO(linkedAccount, accountDetails);
    }

    @Override
    public PlayerDTO getPlayerById(String id) {
        AccountDetails accountDetails = findPlayer(id);

        return PLAYER_MAPPER.mapToDTO(accountDetails.getAccount(), accountDetails);
    }

    @Override
    public List<PlayerDTO> getAllPlayers() {
        return accountDetailsRepository.findAll().stream()
                .map(player -> PLAYER_MAPPER.mapToDTO(player.getAccount(), player))
                .collect(Collectors.toList());
    }

    @Override
    public List<PlayerDTO> getAllActivePlayers() {
        return accountDetailsRepository.findAll().stream()
                .filter(player -> player.getTeam() != null)
                .map(player -> PLAYER_MAPPER.mapToDTO(player.getAccount(), player))
                .collect(Collectors.toList());
    }

    @Override
    public void updatePlayer(UpdatePlayerDTO updatePlayerDTO) {
        AccountDetails updatedPlayer = PLAYER_MAPPER.mapToModel(updatePlayerDTO, null);
        Account linkedAccount = accountRepository.findAccountByEmail(updatePlayerDTO.getEmail());

        //check if account exists
        verifyAccountExists(linkedAccount, updatePlayerDTO.getEmail());

        //check no diff in email
        verifyEmail(updatePlayerDTO.getEmail(), updatePlayerDTO.getId().toString());

        accountDetailsRepository.save(updatedPlayer);
    }

    private AccountDetails findPlayer(String id) {
        return accountDetailsRepository.findById(UUID.fromString(id)).orElseThrow(
                () -> new EntityNotFoundException(ENTITY, "id", id));
    }

    private AccountDetails findPlayer(Account account, String email) {
        AccountDetails found = accountDetailsRepository.findAccountDetailsByAccount(account);
        if (found == null) {
            throw new EntityNotFoundException(ENTITY, "email", email);
        }
        return found;
    }

    private void verifyAccountExists(Account account, String email) {
        if (account == null) {
            throw new EntityNotFoundException(ENTITY, "email", email);
        }
    }

    private void verifyNoPlayerWithAccountExists(Account account) {
        if (accountDetailsRepository.existsAccountDetailsByAccount(account)) {
            throw new PlayerAlreadyExists(account.getId().toString());
        }
    }

    private void verifyEmail(String email, String id) {
        AccountDetails oldPlayer = findPlayer(id);
        if (!oldPlayer.getAccount().getEmail().equals(email)) {
            throw new InvalidUpdatePlayerException(email);
        }
    }

    private void verifyIfPlayerActive(AccountDetails accountDetails) {
        if (accountDetails.getTeam() == null) {
            throw new EntityAlreadyDeactivatedException(ENTITY, accountDetails.getId().toString());
        }
    }
}
