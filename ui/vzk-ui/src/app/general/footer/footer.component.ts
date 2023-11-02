import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Translation} from "../../models/translation/translation";
import {TranslationService} from "../../services/translation-service/translation.service";

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

  translationsAbout: { [key: string]: Translation };

  constructor(
    private translationService: TranslationService,
    private router: Router
  ) {
    this.translationsAbout = translationService.translationsFooter;
  }

  getTranslation(id: string) {
    return this.translationsAbout[id].content;
  }

  navigateToPage(page: string) {
    this.router.navigate([page]);
    setTimeout(() => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }, 100);
  }

  navigateToExternalLink(url: string): void {
    const externalUrl = this.externalLinks[url];
    if (externalUrl) {
      window.open(externalUrl, '_blank');
    }
  }
}
