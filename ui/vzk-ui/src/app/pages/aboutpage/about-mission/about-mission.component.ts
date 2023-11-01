import {Component, Input} from '@angular/core';
import {Translation} from "../../../models/translation/translation";

@Component({
  selector: 'app-about-mission',
  templateUrl: './about-mission.component.html',
  styleUrls: ['./about-mission.component.css']
})
export class AboutMissionComponent {
  @Input() translationsAbout!: { [key: string]: Translation };

  getTranslation(id: string){
    return this.translationsAbout[id].content;
  }
}
