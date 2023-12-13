import {Component} from '@angular/core';
import {Translation} from "../../../models/translation/translation";
import {TranslationService} from "../../../services/translation-service/translation.service";

@Component({
  selector: 'app-vie-article-page',
  templateUrl: './vie-article-page.component.html',
  styleUrls: ['./vie-article-page.component.css']
})
export class VieArticlePageComponent {
  translationsViewArticle: { [key: string]: Translation };

  constructor(
    private translationService: TranslationService
  ) {
    this.translationsViewArticle = translationService.translationsViewArticle;
  }
}
