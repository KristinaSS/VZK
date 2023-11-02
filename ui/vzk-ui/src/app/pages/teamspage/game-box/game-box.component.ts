import {Component, Input} from '@angular/core';
import {Game} from "../../../models/game/game";
import {ScrollService} from "../../../services/scroll-service/scroll.service";
import {Translation} from "../../../models/translation/translation";

@Component({
  selector: 'app-game-box',
  templateUrl: './game-box.component.html',
  styleUrls: ['./game-box.component.css']
})
export class GameBoxComponent {
  @Input() gameList: Game[] | undefined;

  constructor(private scrollService: ScrollService) {}

  @Input() translationsAbout!: { [key: string]: Translation };

  scrollToGameLogo(gameId: string) {
    this.scrollService.scrollToElement(gameId);
  }
}
