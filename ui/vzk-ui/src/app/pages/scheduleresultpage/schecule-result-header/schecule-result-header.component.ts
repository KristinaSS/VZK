import {Component, Input} from '@angular/core';
import {Translation} from "../../../models/translation/translation";

@Component({
  selector: 'app-schecule-result-header',
  templateUrl: './schecule-result-header.component.html',
  styleUrls: ['./schecule-result-header.component.css']
})
export class ScheculeResultHeaderComponent {
  @Input() translationsAbout!: { [key: string]: Translation };

  getTranslation(id: string) {
    return this.translationsAbout[id].content;
  }
}
