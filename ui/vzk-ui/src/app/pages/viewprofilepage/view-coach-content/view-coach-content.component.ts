import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-coach-content',
  templateUrl: './view-coach-content.component.html',
  styleUrls: ['./view-coach-content.component.css']
})
export class ViewCoachContentComponent {
  constructor(
    private router: Router,
  ) {
  }

  onClick() {
    let page = 'coach';
    this.router.navigate([page]);
    setTimeout(() => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }, 100);
  }
}
