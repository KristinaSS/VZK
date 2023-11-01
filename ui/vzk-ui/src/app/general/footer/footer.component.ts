import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private router: Router) {
  }

  navigateToPage(page: string) {
    // Navigate to the selected page
    this.router.navigate([page]);

    // Scroll to the top of the page
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}
