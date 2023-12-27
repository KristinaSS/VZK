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
    private router: Router
  ) {
  }

  async ngOnInit() {
    const isLogged = sessionStorage.getItem('logged') === 'true';

    if (!isLogged) {
      await this.router.navigate(['']);
    } else {
      // @ts-ignore
      this.userRole = sessionStorage.getItem("role");
      console.log(this.userRole);
    }
  }
}
