import {Component, Input} from '@angular/core';
import {Player} from "../../../models/player/player";

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent {
  @Input() player: Player | undefined;
}
