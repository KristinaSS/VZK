import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {AuthenticationService} from "../../services/authentication-service/authentication.service";
import {User} from "../../models/user/user";
import {JwtResponse} from "../../models/jwt-token/jwt-response";

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {
  username: string = '';
  password: string = '';


  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    private authenticationService: AuthenticationService
  ) {}

  async onLogin() {
    try {
      const data: JwtResponse | undefined = await (await this.authenticationService.authenticate(this.username, this.password)).toPromise();
      // @ts-ignore
      sessionStorage.setItem("token", data.token);
      // @ts-ignore
      sessionStorage.setItem("username", data.username)
      sessionStorage.setItem("logged", "true");
      window.location.reload();
    } catch (error) {
      console.error('Error logging in:', error);
    }

    this.dialogRef.close();
  }

  onSignUp(): void {
    this.dialogRef.close();
  }
}
