import {Component, OnInit} from '@angular/core';
import {Translation} from "../../../models/translation/translation";
import {TranslationService} from "../../../services/translation-service/translation.service";
import {AuthenticationService} from "../../../services/authentication-service/authentication.service";

@Component({
  selector: 'app-schecule-result-page',
  templateUrl: './schedule-result-page.component.html',
  styleUrls: ['./schedule-result-page.component.css']
})
export class ScheduleResultPageComponent implements OnInit{
  currentContent: number = 1;
  button1Disabled: boolean = true;
  button2Disabled: boolean = false;

  translationsAbout: { [key: string]: Translation };

  constructor(
    private translationService: TranslationService,
    private authenticationService: AuthenticationService
  ) {
    this.translationsAbout = translationService.translationsSchedule;
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
  showContent(contentNumber: number): void {
    if (contentNumber === 1) {
      this.currentContent = 1;
      this.button1Disabled = true;
      this.button2Disabled = false;
    } else if (contentNumber === 2) {
      this.currentContent = 2;
      this.button1Disabled = false;
      this.button2Disabled = true;
    }
  }

  getTranslation(id: string) {
    return this.translationsAbout[id].content;
  }
}
