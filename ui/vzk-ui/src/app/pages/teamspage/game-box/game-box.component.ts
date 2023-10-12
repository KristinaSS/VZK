import {Component, Input} from '@angular/core';
import {Game} from "../../../models/game/game";
import {ScrollService} from "../../../services/scroll-service/scroll.service";

@Component({
  selector: 'app-game-box',
  templateUrl: './game-box.component.html',
  styleUrls: ['./game-box.component.css']
})
export class GameBoxComponent {
  @Input() gameList: Game[] | undefined;

  constructor(private scrollService: ScrollService) {}

  scrollToGameLogo(gameId: string) {
    this.scrollService.scrollToElement(gameId);
  }
}
