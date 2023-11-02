import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {Translation} from "../../models/translation/translation";
import {TranslationService} from "../../services/translation-service/translation.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent {
  isMobileMenuActive = false;
  loggedIn = false;
  isHidden: boolean = false;
  username = 'Axolotl';


  translationsAbout: { [key: string]: Translation };

  constructor(
    private translationService: TranslationService,
    private router: Router
  ) {
    this.translationsAbout = translationService.translationsNavbar;
  }

  getTranslation(id: string) {
    return this.translationsAbout[id].content;
  }

  toggleMobileMenu() {
    this.isMobileMenuActive = !this.isMobileMenuActive;
  }

  login() {
    this.loggedIn = !this.loggedIn;
  }

  navigateToPage(page: string) {
    this.router.navigate([page]);
    setTimeout(() => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }, 100); // Adjust the delay as needed
  }

  navigateToProfile() {
    // Implement navigation to the profile page
  }

  toggleHiddenDiv(value: boolean): void {
    this.isHidden = value;
  }
}
