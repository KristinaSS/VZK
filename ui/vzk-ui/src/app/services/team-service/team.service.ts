import {Injectable} from '@angular/core';
import {PlayerService} from "../player-service/player.service";
import {Game} from "../../models/game/game";
import {GameService} from "../game-service/game.service";

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  default: Game = {
    id: `0`,
    title: 'NaN',
    img: 'https://wallpapers.com/images/hd/hd-counter-strike-global-offensive-background-sp8pzwi24m2hz0vb.jpg',
    logo: 'https://esportbetweb.com/wp-content/uploads/2019/07/csgo-moreorange2.png'
  };

  private gameList = this.gameService.getGames();

  private lolTeam = {
    id: '1',
    game: this.gameList && this.gameList.length > 0 ? this.gameList[0] : this.default,
    name: 'Obsidian',
    players: this.playerService.getLoLPlayersMain(),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  };
  private lolCobaltTeam = {
    id: '2',
    game: this.gameList && this.gameList.length > 0 ? this.gameList[0] : this.default,
    name: 'Cobalt',
    players: this.playerService.getLoLPPlayersCobalt(),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  };
  private valorantTeam = {
    id: '3',
    game: this.gameList && this.gameList.length > 0 ? this.gameList[1] : this.default,
    name: 'Ruby',
    players: this.playerService.getValorantPlayers(),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  };
  private csgoTeam = {
    id: '4',
    game: this.gameList && this.gameList.length > 0 ? this.gameList[2] : this.default,
    name: 'Ember',
    players: this.playerService.getCsgoPlayers(),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  };

  constructor(private playerService: PlayerService, private gameService: GameService) {
  }

  getTeams(){
    return [this.lolTeam, this.lolCobaltTeam, this.valorantTeam, this.csgoTeam]
  }
}
