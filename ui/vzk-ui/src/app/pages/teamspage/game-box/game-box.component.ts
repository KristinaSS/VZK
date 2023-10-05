import { Component } from '@angular/core';
import {Game} from "../../../models/game/game";

@Component({
  selector: 'app-game-box',
  templateUrl: './game-box.component.html',
  styleUrls: ['./game-box.component.css']
})
export class GameBoxComponent {
  gameList: Game[] = [
    { id: `123`, title: 'League of Legends', img: 'https://i.pinimg.com/originals/50/05/7d/50057dc2df5e0503d5de6f55b6a6df0b.jpg'},
    { id: `456`, title: 'Valorant', img: 'https://images2.alphacoders.com/132/1322753.jpeg' },
    { id: `789`, title: 'CS:GO', img: 'https://wallpapers.com/images/hd/hd-counter-strike-global-offensive-background-sp8pzwi24m2hz0vb.jpg' }
  ];
}
