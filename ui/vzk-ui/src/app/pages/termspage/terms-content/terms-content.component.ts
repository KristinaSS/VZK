import {Component, Input} from '@angular/core';
import {Translation} from "../../../models/translation/translation";

@Component({
  selector: 'app-terms-content',
  templateUrl: './terms-content.component.html',
  styleUrls: ['./terms-content.component.css']
})
export class TermsContentComponent {
  @Input() translationsAbout!: { [key: string]: Translation };

  getTranslation(id: string) {
    return this.translationsAbout[id].content;
  }
}
