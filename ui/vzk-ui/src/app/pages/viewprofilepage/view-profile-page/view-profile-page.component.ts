import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from "../../../services/authentication-service/authentication.service";

@Component({
  selector: 'app-view-profile-page',
  templateUrl: './view-profile-page.component.html',
  styleUrls: ['./view-profile-page.component.css']
})
export class ViewProfilePageComponent implements OnInit {
  userRole = "";

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {
  }

  async ngOnInit() {
    await this.checkIfExpired();
    const isLogged = sessionStorage.getItem('logged') === 'true';

    if (!isLogged) {
      await this.router.navigate(['']);
    } else {
      // @ts-ignore
      this.userRole = sessionStorage.getItem("role");
      console.log(this.userRole);
    }
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
