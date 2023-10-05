import {Component, Input} from '@angular/core';
import {Game} from "../../../models/game/game";

@Component({
  selector: 'app-game-box',
  templateUrl: './game-box.component.html',
  styleUrls: ['./game-box.component.css']
})
export class GameBoxComponent {
  @Input() gameList: Game[] | undefined;
}
