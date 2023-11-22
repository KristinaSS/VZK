import {Component, OnInit} from '@angular/core';
import {Game} from "../../../models/game/game";
import {GameService} from "../../../services/game-service/game.service";
import {Translation} from "../../../models/translation/translation";
import {TranslationService} from "../../../services/translation-service/translation.service";

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent implements OnInit {
  gameList: Game[] = [];

  translationsAbout: { [key: string]: Translation };

  constructor(
    private translationService: TranslationService, private gameService: GameService) {
    this.translationsAbout = translationService.translationsTeams;
  }
  ngOnInit(): void {
    this.gameService.getGames().subscribe(
      (data: Game[]) => {
        this.gameList = data;
      },
      (error) => {
        console.error('Error fetching games:', error);
      }
    );
  }
}
