import {Component, OnInit} from '@angular/core';
import {Translation} from "../../../models/translation/translation";
import {TranslationService} from "../../../services/translation-service/translation.service";
import {AuthenticationService} from "../../../services/authentication-service/authentication.service";

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  translationsAbout: { [key: string]: Translation };

  constructor(
    private translationService: TranslationService,
    private authenticationService: AuthenticationService,
  ) {
    this.translationsAbout = translationService.translationsContact;
  }

  ngOnInit(): void {
    this.checkIfExpired();
  }

  async checkIfExpired(){
    try {
      await (await this.authenticationService.checkIfExpired()).toPromise();
    } catch (error) {
      console.error('Session has been expired:', error);
      sessionStorage.removeItem("token")
      sessionStorage.removeItem("role")
      sessionStorage.setItem("logged", "false")
      window.location.reload();
    }
  }

}
