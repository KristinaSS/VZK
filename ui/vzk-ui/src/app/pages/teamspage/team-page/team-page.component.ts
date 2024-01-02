import {Component, OnInit} from '@angular/core';
import {Game} from "../../../models/game/game";
import {GameService} from "../../../services/game-service/game.service";
import {Translation} from "../../../models/translation/translation";
import {TranslationService} from "../../../services/translation-service/translation.service";
import {AuthenticationService} from "../../../services/authentication-service/authentication.service";

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent implements OnInit {
  gameList: Game[] = [];

  translationsAbout: { [key: string]: Translation };

  constructor(
    private translationService: TranslationService, private gameService: GameService, private authenticationService: AuthenticationService) {
    this.translationsAbout = translationService.translationsTeams;
  }

  ngOnInit(): void {
    this.checkIfExpired();
    this.gameService.getGames().subscribe(
      (data: Game[]) => {
        this.gameList = data;
      },
      (error) => {
        console.error('Error fetching games:', error);
      }
    );
  }

  async checkIfExpired() {
    try {
      await (await this.authenticationService.checkIfExpired()).toPromise();
    } catch (error) {
      console.error('Session has been expired:', error);
      sessionStorage.removeItem("token")
      sessionStorage.removeItem("role")
      sessionStorage.setItem("logged", "false")
      window.location.reload();
    }
  }
}
