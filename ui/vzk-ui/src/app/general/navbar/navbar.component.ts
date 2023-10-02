import {Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMobileMenuActive = false;
  loggedIn = false;
  isHidden: boolean = false;
  username = 'Axolotl'

  toggleMobileMenu() {
    this.isMobileMenuActive = !this.isMobileMenuActive;
  }

  login() {
    this.loggedIn = !this.loggedIn;
  }

  navigateToProfile() {
    // Implement navigation to the profile page
  }

  toggleHiddenDiv(value: boolean): void {
    this.isHidden = value;
  }
}
