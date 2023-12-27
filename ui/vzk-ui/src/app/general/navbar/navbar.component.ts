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
  username = sessionStorage.getItem("username");


  translationsAbout: { [key: string]: Translation };

  constructor(
    private translationService: TranslationService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.translationsAbout = translationService.translationsNavbar;
    this.loggedIn = sessionStorage.getItem("logged") == "true";
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
  logout() {
    this.loggedIn = false;
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("role")
    sessionStorage.setItem("logged", "false")
    this.loggedIn = false;

    this.refreshPage();
  }
  navigateToPage(page: string) {
    this.router.navigate([page]);
    setTimeout(() => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }, 100);
  }
  toggleHiddenDiv(value: boolean): void {
    this.isHidden = value;
  }

  private openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      disableClose: true,
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loggedIn = sessionStorage.getItem("logged") == "true";
    });
  }
  private refreshPage() {
    window.location.reload();
  }
}
