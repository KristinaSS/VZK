import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {AuthenticationService} from "../../services/authentication-service/authentication.service";

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

  onLogin(): void {
    // Handle login logic here
    console.log('Login clicked');
    let user = this.authenticationService.authenticate(this.username, this.password);

    if(user != null){
      sessionStorage.setItem("username", user.username)
      sessionStorage.setItem("token", user.token)
    }
    this.dialogRef.close();
  }

  onSignUp(): void {
    console.log('Sign Up clicked');
    this.dialogRef.close();
  }
}
