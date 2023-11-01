import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ScrollService} from "../../services/scroll-service/scroll.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private router: Router, private scrollService: ScrollService) {
  }

  navigateToPage(page: string) {
    this.router.navigate([page]);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100); // Adjust the delay as needed
  }

  scrollToGameLogo(gameId: string) {
    this.scrollService.scrollToElement(gameId);
  }
}
