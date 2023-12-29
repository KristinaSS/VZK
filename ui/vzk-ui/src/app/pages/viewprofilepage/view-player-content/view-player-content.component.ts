import {Component, Input} from '@angular/core';
import {Player} from "../../../models/player/player";

@Component({
  selector: 'app-view-player-content',
  templateUrl: './view-player-content.component.html',
  styleUrls: ['./view-player-content.component.css']
})
export class ViewPlayerContentComponent {
  @Input() account: Player | undefined;

  editPlayer() {
    console.log("this account " + this.account?.name)
  }
}
