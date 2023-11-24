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
    let user: User = {
      id: '123',
      username: 'Axolotl',
      email: 'axolotl@gmail.com',
      token: sessionStorage.getItem("token") || 'anonymous'
    };
    try {
      const data: JwtResponse | undefined = await (await this.authenticationService.authenticate(this.username, this.password)).toPromise();
      // @ts-ignore
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("username", user.username)
      sessionStorage.setItem("logged", "true");

      // @ts-ignore
      user.token = sessionStorage.getItem("token");

    } catch (error) {
      console.error('Error logging in:', error);
    }

    this.dialogRef.close();
  }

  onSignUp(): void {
    this.dialogRef.close();
  }
}
