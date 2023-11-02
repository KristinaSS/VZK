import {Component, Input} from '@angular/core';
import {Translation} from "../../../models/translation/translation";

@Component({
  selector: 'app-top-teams-banner',
  templateUrl: './top-teams-banner.component.html',
  styleUrls: ['./top-teams-banner.component.css']
})
export class TopTeamsBannerComponent {
  @Input() translationsAbout!: { [key: string]: Translation };

  getTranslation(id: string) {
    return this.translationsAbout[id].content;
  }
}
