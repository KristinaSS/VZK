import {Component, Input} from '@angular/core';
import {Translation} from "../../../models/translation/translation";

@Component({
  selector: 'app-terms-header',
  templateUrl: './terms-header.component.html',
  styleUrls: ['./terms-header.component.css']
})
export class TermsHeaderComponent {
  @Input() translationsAbout!: { [key: string]: Translation };

  getTranslation(id: string) {
    return this.translationsAbout[id].content;
  }
}
