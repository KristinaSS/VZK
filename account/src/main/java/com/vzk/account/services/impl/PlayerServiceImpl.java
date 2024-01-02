package com.vzk.account.services.impl;

import com.vzk.account.exceptions.EntityAlreadyDeactivatedException;
import com.vzk.account.exceptions.EntityNotFoundException;
import com.vzk.account.exceptions.InvalidUpdatePlayerException;
import com.vzk.account.exceptions.PlayerAlreadyExists;
import com.vzk.account.feign.RolesClient;
import com.vzk.account.models.Account;
import com.vzk.account.models.AccountDetails;
import com.vzk.account.models.Team;
import com.vzk.account.repos.AccountDetailsRepository;
import com.vzk.account.repos.AccountRepository;
import com.vzk.account.repos.TeamRepository;
import com.vzk.account.services.PlayerService;
import org.openapitools.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import static com.vzk.account.constants.Constants.DEFAULT_USER_ROLE_UUID;
import static com.vzk.account.mapper.PlayerMapper.PLAYER_MAPPER;

@Service
public class PlayerServiceImpl implements PlayerService {
    private static final String ENTITY = "player";

    @Autowired
    private AccountDetailsRepository accountDetailsRepository;

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private RolesClient rolesClient;

    @Override
    public PlayerDTO createPlayer(CreatePlayerDTO createPlayerDTO) {
        Team team = findTeam(createPlayerDTO.getTeam());
        List<RoleDTO> roleDTOS = rolesClient.getRolesAllActive();

        //check if role correct
        RoleDTO role = roleDTOS.stream()
                .filter(roleDTO -> roleDTO.getName().equals(createPlayerDTO.getRole()))
                .findFirst()
                .orElseThrow(
                        () -> new EntityNotFoundException("Role", "name", createPlayerDTO.getRole())
                );

        Account linkedAccount = accountRepository.findAccountByEmail(createPlayerDTO.getEmail());

        //check if account exists
        verifyAccountExists(linkedAccount, createPlayerDTO.getEmail());
        AccountDetails createdPlayer = PLAYER_MAPPER.mapToModel(createPlayerDTO, team, linkedAccount);

        //check if account available
        verifyNoPlayerWithAccountExists(linkedAccount);

        //todo throws error 415
        rolesClient.deleteAccountRole(linkedAccount.getId(), DEFAULT_USER_ROLE_UUID, linkedAccount.getId(), DEFAULT_USER_ROLE_UUID);
        rolesClient.giveAccountRole(linkedAccount.getId(), role.getId(), linkedAccount.getId(), role.getId());

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
    public ShortPlayerDTO getShortPlayerByEmail(String email) {
        Account linkedAccount = accountRepository.findAccountByEmail(email);

        //check if account exists
        verifyAccountExists(linkedAccount, email);

        AccountDetails accountDetails = findPlayer(linkedAccount, email);

        return PLAYER_MAPPER.mapToShortDTO(linkedAccount, accountDetails);
    }

    @Override
    public void updatePlayerAdmin(UpdatePlayerAdminDTO updatePlayerDTO) {
        Account linkedAccount = accountRepository.findAccountByEmail(updatePlayerDTO.getEmail());
        Team linkedTeam = updatePlayerDTO.getTeam() == null || updatePlayerDTO.getTeam().toString().isEmpty()
                ? null
                : teamRepository.findById(updatePlayerDTO.getTeam()).orElseThrow(
                () -> new EntityNotFoundException("Team", "id", updatePlayerDTO.getTeam().toString()));
        AccountDetails updatedPlayer = PLAYER_MAPPER.mapToModel(updatePlayerDTO, linkedTeam, linkedAccount);

        //check if account exists
        verifyAccountExists(linkedAccount, updatePlayerDTO.getEmail());

        AccountDetails current = accountDetailsRepository.findAccountDetailsByAccount(linkedAccount);

        AccountDetails saved = updatePlayerFields(current, updatedPlayer);

        accountDetailsRepository.save(saved);
    }

    @Override
    public void updatePlayerUser(UpdatePlayerUserDTO updatePlayerUserDTO) {
        Account linkedAccount = accountRepository.findAccountByEmail(updatePlayerUserDTO.getEmail());
        AccountDetails updatedPlayer = PLAYER_MAPPER.mapToModel(updatePlayerUserDTO, linkedAccount);

        //check if account exists
        verifyAccountExists(linkedAccount, updatePlayerUserDTO.getEmail());
        AccountDetails current = accountDetailsRepository.findAccountDetailsByAccount(linkedAccount);

        //check no diff in email
        verifyEmail(updatePlayerUserDTO.getEmail(), current.getAccount().getEmail());

        AccountDetails saved = updatePlayerFields(current, updatedPlayer);

        accountDetailsRepository.save(saved);
    }

    private AccountDetails updatePlayerFields(AccountDetails accountDetails, AccountDetails updated) {
        if (updated.getTeam() != null) {
            accountDetails.setTeam(updated.getTeam());
        }
        if (updated.getPlayerName() != null && !updated.getPlayerName().isEmpty()) {
            accountDetails.setPlayerName(updated.getPlayerName());
        }
        if (updated.getRole() != null && !updated.getRole().isEmpty()) {
            accountDetails.setRole(updated.getRole());
        }
        if (updated.getBirthday() != null && !updated.getBirthday().isEmpty()) {
            accountDetails.setBirthday(updated.getBirthday());
        }
        if (updated.getGender() != null) {
            accountDetails.setGender(updated.getGender());
        }
        if (updated.getImage() != null && !updated.getImage().isEmpty()) {
            accountDetails.setImage(updated.getImage());
        }
        if (updated.getCountryOrigin() != null && !updated.getCountryOrigin().isEmpty()) {
            accountDetails.setCountryOrigin(updated.getCountryOrigin());
        }
        if (updated.getInstagram() != null && !updated.getInstagram().isEmpty()) {
            accountDetails.setInstagram(updated.getInstagram());
        }
        if (updated.getTwitch() != null && !updated.getTwitch().isEmpty()) {
            accountDetails.setTwitch(updated.getTwitch());
        }
        if (updated.getTwitter() != null && !updated.getTwitter().isEmpty()) {
            accountDetails.setTwitter(updated.getTwitter());
        }
        if (updated.getYoutube() != null && !updated.getYoutube().isEmpty()) {
            accountDetails.setYoutube(updated.getYoutube());
        }

        return accountDetails;
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

    private void verifyEmail(String email, String emailCur) {
        if (!emailCur.equals(email)) {
            throw new InvalidUpdatePlayerException(email);
        }
    }

    private void verifyIfPlayerActive(AccountDetails accountDetails) {
        if (accountDetails.getTeam() == null) {
            throw new EntityAlreadyDeactivatedException(ENTITY, accountDetails.getId().toString());
        }
    }

    private Team findTeam(UUID team) {
        return teamRepository.findById(team).orElseThrow(
                () -> new EntityNotFoundException("Team", "id", team.toString()));
    }
}
