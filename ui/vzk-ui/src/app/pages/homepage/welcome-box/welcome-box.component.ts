import {Component, Input} from '@angular/core';
import {Translation} from "../../../models/translation/translation";

@Component({
  selector: 'welcome-box',
  templateUrl: './welcome-box.component.html',
  styleUrls: ['./welcome-box.component.css']
})
export class WelcomeBoxComponent {
  @Input() translationsAbout!: { [key: string]: Translation };

  getTranslation(id: string) {
    return this.translationsAbout[id].content;
  }
}
