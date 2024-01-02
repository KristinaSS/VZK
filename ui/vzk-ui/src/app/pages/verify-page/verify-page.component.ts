import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication-service/authentication.service";
import {ActivatedRoute} from "@angular/router";
import {CommonDialogComponent} from "../../utils/dialogs/common-dialog/common-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-verify-page',
  templateUrl: './verify-page.component.html',
  styleUrls: ['./verify-page.component.css']
})
export class VerifyPageComponent implements OnInit {
  verificationStatus!: String | undefined;
  message!: string;
  token!: string | null;
  email!: string | null;

  constructor(private authenticationService: AuthenticationService, private route: ActivatedRoute, private dialog: MatDialog) {
  }

  async ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('vToken');
    this.email = this.route.snapshot.paramMap.get('email');
    this.checkIfExpired();

    try {
      let response = await (await this.authenticationService.verifyToken(this.token, this.email)).toPromise();
      this.verificationStatus = response?.status;
      this.handleVerificationResponse();
    } catch (error) {
      // Handle errors here
      console.error('Error verifying account:', error);
      this.verificationStatus = 'error';
      this.handleVerificationResponse();
    }
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


  async resend() {
    this.email = this.route.snapshot.paramMap.get('email');
    try {
      await (await this.authenticationService.resend(this.email)).toPromise();
      this.dialog.open(CommonDialogComponent, {
        width: '300px',
        data: {message: "A new verification request has been sent. Please check your email."}
      });

    } catch (error) {
      // Handle errors here
      console.error('Error sending new verification request. Please contact support.', error);
      this.dialog.open(CommonDialogComponent, {
        width: '300px',
        data: {message: "Error sending new verification request. Please contact support."}
      });
    }
  }

  private handleVerificationResponse() {
    switch (this.verificationStatus) {
      case 'verified':
        this.message = '<p>Account has been verified</p>';
        break;
      case 'expired':
        this.message = '<p>Verification has expired</p>';
        break;
      case 'error':
        this.message = '<p>Problem has occurred while verifying</p>';
        break;
      default:
        this.message = '<p>Unknown verification status: ' + this.verificationStatus + '</p>';
        break;
    }
  }
}
