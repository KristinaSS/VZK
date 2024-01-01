import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-admin-content',
  templateUrl: './view-admin-content.component.html',
  styleUrls: ['./view-admin-content.component.css']
})
export class ViewAdminContentComponent {
  constructor(
    private router: Router,
  ) {
  }

  onClick() {
    let page = '/admin';
    this.router.navigate([page]);
    setTimeout(() => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }, 100);
  }
}
