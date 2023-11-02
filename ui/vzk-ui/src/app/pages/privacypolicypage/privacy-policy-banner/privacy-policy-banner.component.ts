import {Component, Input} from '@angular/core';
import {Translation} from "../../../models/translation/translation";

@Component({
  selector: 'app-privacy-policy-banner',
  templateUrl: './privacy-policy-banner.component.html',
  styleUrls: ['./privacy-policy-banner.component.css']
})
export class PrivacyPolicyBannerComponent {
  @Input() translationsAbout!: { [key: string]: Translation };

  getTranslation(id: string) {
    return this.translationsAbout[id].content;
  }
}
