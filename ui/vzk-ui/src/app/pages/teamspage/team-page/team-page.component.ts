import {Component, Output} from '@angular/core';
import {Game} from "../../../models/game/game";

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent {
  gameList: Game[] = [
    {
      id: `123`,
      title: 'League of Legends',
      img: 'https://i.pinimg.com/originals/50/05/7d/50057dc2df5e0503d5de6f55b6a6df0b.jpg',
      logo: 'https://ww2.freelogovectors.net/svg06/league-of-legends-logo-lol.svg'
    },
    {
      id: `456`,
      title: 'Valorant',
      img: 'https://images2.alphacoders.com/132/1322753.jpeg' ,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Valorant_logo_-_pink_color_version.svg/1280px-Valorant_logo_-_pink_color_version.svg.png'
    },
    {
      id: `789`,
      title: 'CS:GO',
      img: 'https://wallpapers.com/images/hd/hd-counter-strike-global-offensive-background-sp8pzwi24m2hz0vb.jpg',
      logo: 'https://esportbetweb.com/wp-content/uploads/2019/07/csgo-moreorange2.png'
    }
  ];
}
