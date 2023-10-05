import {Component, Input} from '@angular/core';
import {Game} from "../../../models/game/game";

@Component({
  selector: 'app-teams-box',
  templateUrl: './teams-box.component.html',
  styleUrls: ['./teams-box.component.css']
})
export class TeamsBoxComponent {
  @Input() gameList: Game[] | undefined;
}
