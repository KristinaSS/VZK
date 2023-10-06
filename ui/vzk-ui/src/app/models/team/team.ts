import {Game} from "../game/game";
import {Player} from "../player/player";

export class Team{
  id: string;
  name: string;
  game: Game;
  players: Player[];
  description: string;


  constructor(id: string, name: string, game: Game, players: Player[], description: string) {
    this.id = id;
    this.name = name;
    this.game = game;
    this.players = players;
    this.description = description;
  }
}
