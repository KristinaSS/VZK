import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ScrollService} from "../../services/scroll-service/scroll.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  externalLinks: { [key: string]: string } = {
    twitch: 'https://www.twitch.tv/verzikesports',
    facebook: 'https://www.facebook.com/yourpage',
    twitter: 'https://twitter.com/VerzikEsports',
    youtube: 'https://www.youtube.com/yourchannel',
    instagram: 'https://www.instagram.com/verzik_esports/',
    reddit: 'https://www.reddit.com/yourpage',
    discord: 'https://discord.gg/EbWEGUMtfY',
  };

  constructor(private router: Router) {
  }

  navigateToPage(page: string) {
    this.router.navigate([page]);
    setTimeout(() => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }, 100); // Adjust the delay as needed
  }

  navigateToExternalLink(url: string): void {
    const externalUrl = this.externalLinks[url];
    if (externalUrl) {
      window.open(externalUrl, '_blank');
    }
  }
}
