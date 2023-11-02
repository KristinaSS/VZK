import { Component } from '@angular/core';
import {Translation} from "../../../models/translation/translation";
import {TranslationService} from "../../../services/translation-service/translation.service";

@Component({
  selector: 'app-terms-page',
  templateUrl: './terms-page.component.html',
  styleUrls: ['./terms-page.component.css']
})
export class TermsPageComponent {
  translationsAbout: { [key: string]: Translation };

  constructor(
    private translationService: TranslationService
  ) {
    this.translationsAbout = translationService.translationsTerms;
  }
}
