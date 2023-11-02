import {Component} from '@angular/core';
import {Translation} from "../../../models/translation/translation";
import {TranslationService} from "../../../services/translation-service/translation.service";

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent {
  translationsAbout: { [key: string]: Translation };

  constructor(
    private translationService: TranslationService
  ) {
    this.translationsAbout = translationService.translationsNews;
  }
}
