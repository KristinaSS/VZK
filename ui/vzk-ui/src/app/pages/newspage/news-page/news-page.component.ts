import {Component, OnInit} from '@angular/core';
import {Translation} from "../../../models/translation/translation";
import {TranslationService} from "../../../services/translation-service/translation.service";
import {AuthenticationService} from "../../../services/authentication-service/authentication.service";

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {
  translationsAbout: { [key: string]: Translation };

  constructor(
    private translationService: TranslationService,
    private authenticationService: AuthenticationService
  ) {
    this.translationsAbout = translationService.translationsNews;
  }

  ngOnInit(): void {
    this.checkIfExpired();
  }

  async checkIfExpired() {
    try {
      await (await this.authenticationService.checkIfExpired()).toPromise();
    } catch (error) {
      console.error('Session has been expired:', error);
      sessionStorage.removeItem("token")
      sessionStorage.removeItem("role")
      sessionStorage.setItem("logged", "false")
      window.location.reload();
    }
  }
}

