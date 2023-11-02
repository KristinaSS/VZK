import { Component } from '@angular/core';
import {Translation} from "../../../models/translation/translation";
import {TranslationService} from "../../../services/translation-service/translation.service";

@Component({
  selector: 'app-privacy-policy-page',
  templateUrl: './privacy-policy-page.component.html',
  styleUrls: ['./privacy-policy-page.component.css']
})
export class PrivacyPolicyPageComponent {
  translationsAbout: { [key: string]: Translation };

  constructor(
    private translationService: TranslationService
  ) {
    this.translationsAbout = translationService.translationsPrivacyPolicy;
  }
}
