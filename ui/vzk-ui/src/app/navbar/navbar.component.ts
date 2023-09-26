import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMobileMenuActive = false;
  isDesktopView = window.innerWidth > 768 && window.innerHeight > 1024;

  toggleMobileMenu() {
    this.isMobileMenuActive = !this.isMobileMenuActive;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isDesktopView = window.innerWidth > 768 && window.innerHeight > 1024;
  }
}
