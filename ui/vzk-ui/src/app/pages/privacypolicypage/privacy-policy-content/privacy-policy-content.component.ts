import {Component, Input} from '@angular/core';
import {Translation} from "../../../models/translation/translation";

@Component({
  selector: 'app-privacy-policy-content',
  templateUrl: './privacy-policy-content.component.html',
  styleUrls: ['./privacy-policy-content.component.css']
})
export class PrivacyPolicyContentComponent {
  @Input() translationsAbout!: { [key: string]: Translation };

  getTranslation(id: string) {
    return this.translationsAbout[id].content;
  }
}
