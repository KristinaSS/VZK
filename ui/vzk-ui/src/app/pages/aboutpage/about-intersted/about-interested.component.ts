import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-about-interested',
  templateUrl: './about-interested.component.html',
  styleUrls: ['./about-interested.component.css']
})
export class AboutInterestedComponent {
  paragraphText = "Apply for a position through the career page:";

  constructor(private router: Router) {
  }

  openContact() {
    this.router.navigate(['/contact']).then(r => {
      window.scrollTo(0, 0);
    });
  }
}
