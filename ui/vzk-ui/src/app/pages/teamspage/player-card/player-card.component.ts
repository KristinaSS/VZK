import {Component, Input} from '@angular/core';
import {Player} from "../../../models/player/player";
import {Router} from "@angular/router";

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent {
  @Input() player: Player | undefined;

  constructor(private router: Router) {
  }

  redirectTo(platform: string): void {
    switch (platform) {
      case 'twitch':
        this.navigateToExternalLink(this.player?.twitch);
        break;
      case 'twitter':
        this.navigateToExternalLink(this.player?.twitter);
        break;
      case 'youtube':
        this.navigateToExternalLink(this.player?.youtube);
        break;
      case 'instagram':
        this.navigateToExternalLink(this.player?.instagram);
        break;
      default:
        break;
    }
  }

  private navigateToExternalLink(url: string | undefined): void {
    window.open(url, '_blank');
  }
}
