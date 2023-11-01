import {Component, ElementRef} from '@angular/core';
import {Translation} from "../../../models/translation/translation";
import {ActivatedRoute, Router} from "@angular/router";
import {TranslationService} from "../../../services/translation-service/translation.service";

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {
  translationsAbout: { [key: string]: Translation };
  constructor(
    private translationService: TranslationService
  ) {
    this.translationsAbout = translationService.translationsContact;
  }
}
