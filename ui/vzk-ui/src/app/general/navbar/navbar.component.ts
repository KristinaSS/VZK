import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';


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
  username = 'Axolotl'

  constructor(private router: Router) {
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
