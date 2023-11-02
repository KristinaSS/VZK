import {Component, Input} from '@angular/core';
import {Translation} from "../../../models/translation/translation";

@Component({
  selector: 'app-top-news-banner',
  templateUrl: './top-news-banner.component.html',
  styleUrls: ['./top-news-banner.component.css']
})
export class TopNewsBannerComponent {
  @Input() translationsAbout!: { [key: string]: Translation };

  getTranslation(id: string) {
    return this.translationsAbout[id].content;
  }
}
