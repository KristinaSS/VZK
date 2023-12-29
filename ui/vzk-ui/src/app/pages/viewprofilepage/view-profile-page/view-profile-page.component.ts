import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from "../../../services/authentication-service/authentication.service";
import {PlayerService} from "../../../services/player-service/player.service";
import {Player} from "../../../models/player/player";

@Component({
  selector: 'app-view-profile-page',
  templateUrl: './view-profile-page.component.html',
  styleUrls: ['./view-profile-page.component.css']
})
export class ViewProfilePageComponent implements OnInit {
  userRole = "";
  email: string | undefined = "";
  account: Player | undefined;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private playerService: PlayerService,
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
      await this.getAccount();
    }
  }

  async checkIfExpired(){
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

  async getAccount(){
    try {
      let emailResponse = await this.playerService.getAccountEmail().toPromise();
      this.email = emailResponse?.email;

      if (this.userRole =='user' || this.userRole =='admin' || this.userRole =='partner'){
        this.account = await this.playerService.getAccount(this.email).toPromise();
      } else {
        this.account = await this.playerService.getDetails(this.email).toPromise();
      }
    }catch (error){
      console.error('Error fetching account:', error);
    }
  }
}
