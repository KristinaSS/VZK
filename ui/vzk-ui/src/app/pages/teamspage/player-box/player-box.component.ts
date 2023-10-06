import {Component, Input} from '@angular/core';
import {Team} from "../../../models/team/team";

@Component({
  selector: 'app-player-box',
  templateUrl: './player-box.component.html',
  styleUrls: ['./player-box.component.css']
})
export class PlayerBoxComponent {
  @Input() team: Team | undefined;
}
