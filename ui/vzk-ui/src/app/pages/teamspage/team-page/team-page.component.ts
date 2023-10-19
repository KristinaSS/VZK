import {Component, OnInit, Output} from '@angular/core';
import {Game} from "../../../models/game/game";
import {GameService} from "../../../services/game-service/game.service";

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent implements OnInit{
  gameList: Game[] = [];


  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameList = this.gameService.getGames();
  }
}
