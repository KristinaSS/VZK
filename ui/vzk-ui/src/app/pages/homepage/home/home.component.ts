import {Component, OnInit} from '@angular/core';
import {Translation} from "../../../models/translation/translation";
import {TranslationService} from "../../../services/translation-service/translation.service";
import {AuthenticationService} from "../../../services/authentication-service/authentication.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  translationsAbout: { [key: string]: Translation };

  constructor(
    private translationService: TranslationService,
    private authenticationService: AuthenticationService
  ) {
    this.translationsAbout = translationService.translationsHomepage;
  }

  ngOnInit(): void {
    this.checkIfExpired();
  }

  async checkIfExpired() {
    const role = sessionStorage.getItem('role');
    let response = await (await this.authenticationService.checkIfExpired()).toPromise();
    let verificationStatus = response?.status;

    if (role !== null && verificationStatus !== "verified") {
      sessionStorage.removeItem("token")
      sessionStorage.removeItem("role")
      sessionStorage.setItem("logged", "false")
      window.location.reload();
    }
  }
}
