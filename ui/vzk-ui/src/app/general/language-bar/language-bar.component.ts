import {Component} from '@angular/core';

@Component({
  selector: 'app-language-bar',
  templateUrl: './language-bar.component.html',
  styleUrls: ['./language-bar.component.css']
})
export class LanguageBarComponent {
  externalLinks: { [key: string]: string } = {
    twitch: 'https://www.twitch.tv/verzikesports',
    facebook: 'https://www.facebook.com/yourpage',
    twitter: 'https://twitter.com/VerzikEsports',
    youtube: 'https://www.youtube.com/yourchannel',
    instagram: 'https://www.instagram.com/verzik_esports/',
    reddit: 'https://www.reddit.com/yourpage',
    discord: 'https://discord.gg/EbWEGUMtfY',
  };

  navigateToExternalLink(url: string): void {
    const externalUrl = this.externalLinks[url];
    if (externalUrl) {
      window.open(externalUrl, '_blank');
    }
  }

}
