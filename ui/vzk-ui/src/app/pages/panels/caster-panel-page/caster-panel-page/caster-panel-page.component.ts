import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../../services/authentication-service/authentication.service";

@Component({
  selector: 'app-caster-panel-page',
  templateUrl: './caster-panel-page.component.html',
  styleUrls: ['./caster-panel-page.component.css']
})
export class CasterPanelPageComponent implements OnInit {
  userRole = "";

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {
  }

  async ngOnInit() {
    await this.checkIfExpired();
    const isLogged = sessionStorage.getItem('logged') === 'true';
    this.userRole = sessionStorage.getItem("role") || "";

    if (!isLogged || this.userRole != "caster") {
      await this.router.navigate(['']);
    }
  }

  async checkIfExpired() {
    const role = sessionStorage.getItem('role');
    let verificationStatus: string | undefined = "";
    try {
      let response = await (await this.authenticationService.checkIfExpired()).toPromise();
      verificationStatus = response?.status;
    } catch (error) {
      console.error('Error fetching articles:', error);
      verificationStatus = "expired";
    }

    if (role !== null && verificationStatus !== "verified") {
      sessionStorage.removeItem("token")
      sessionStorage.removeItem("role")
      sessionStorage.setItem("logged", "false")
      window.location.reload();
    }
  }
}
