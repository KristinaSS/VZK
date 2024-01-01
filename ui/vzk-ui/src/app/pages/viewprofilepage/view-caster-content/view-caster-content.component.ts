import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-caster-content',
  templateUrl: './view-caster-content.component.html',
  styleUrls: ['./view-caster-content.component.css']
})
export class ViewCasterContentComponent {
  constructor(
    private router: Router,
  ) {
  }

  onClick() {
    let page = 'caster';
    this.router.navigate([page]);
    setTimeout(() => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }, 100);
  }
}
