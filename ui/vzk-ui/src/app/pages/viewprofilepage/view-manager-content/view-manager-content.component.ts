import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-manager-content',
  templateUrl: './view-manager-content.component.html',
  styleUrls: ['./view-manager-content.component.css']
})
export class ViewManagerContentComponent {
  constructor(
    private router: Router,
  ) {
  }

  onClick() {
    let page = 'manager';
    this.router.navigate([page]);
    setTimeout(() => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }, 100);
  }
}
