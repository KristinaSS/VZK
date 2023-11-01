import {Component, Input} from '@angular/core';
import {TranslationService} from "../../../services/translation-service/translation.service";
import {Translation} from "../../../models/translation/translation";

@Component({
  selector: 'app-about-content',
  templateUrl: './about-content.component.html',
  styleUrls: ['./about-content.component.css']
})
export class AboutContentComponent {
  @Input() translationsAbout!: { [key: string]: Translation };

  getTranslation(id: string){
    return this.translationsAbout[id].content;
  }
}
