import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-partner-content',
  templateUrl: './view-partner-content.component.html',
  styleUrls: ['./view-partner-content.component.css']
})
export class ViewPartnerContentComponent {
  constructor(
    private router: Router,
  ) {
  }

  onClick() {
    let page = 'partner';
    this.router.navigate([page]);
    setTimeout(() => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }, 100);
  }
}
