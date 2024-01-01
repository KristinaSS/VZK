import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../../services/authentication-service/authentication.service";

@Component({
  selector: 'app-admin-panel-page',
  templateUrl: './admin-panel-page.component.html',
  styleUrls: ['./admin-panel-page.component.css']
})
export class AdminPanelPageComponent implements OnInit {
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

    if (!isLogged || this.userRole != "admin") {
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
