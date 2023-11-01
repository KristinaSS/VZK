import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {Translation} from "../../../models/translation/translation";

@Component({
  selector: 'app-about-interested',
  templateUrl: './about-interested.component.html',
  styleUrls: ['./about-interested.component.css']
})
export class AboutInterestedComponent {
  @Input() translationsAbout!: { [key: string]: Translation };

  constructor(private router: Router) {
  }

  getTranslation(id: string) {
    return this.translationsAbout[id].content;
  }

  openContact() {
    this.router.navigate(['/contact']).then(r => {
      window.scrollTo(0, 0);
    });
  }
}
