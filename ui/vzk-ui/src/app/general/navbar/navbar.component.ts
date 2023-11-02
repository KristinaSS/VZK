import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {Translation} from "../../models/translation/translation";
import {TranslationService} from "../../services/translation-service/translation.service";
import {LoginDialogComponent} from "../../security/login-dialog/login-dialog.component";
import {MatDialog} from "@angular/material/dialog";


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
    private router: Router,
    public dialog: MatDialog
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
    this.openLoginDialog()
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

  private openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
