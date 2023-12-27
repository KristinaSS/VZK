import {Component} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {AuthenticationService} from "../../services/authentication-service/authentication.service";
import {JwtResponse} from "../../models/jwt-token/jwt-response";
import {SignupDialogComponent} from "../sign-up-dialog/signup-dialog.component";
import {CommonDialogComponent} from "../../utils/dialogs/common-dialog/common-dialog.component";

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
    private authenticationService: AuthenticationService,
    public dialog: MatDialog
  ) {
  }

  async onLogin() {
    try {
      const data: JwtResponse | undefined = await (await this.authenticationService.authenticate(this.username, this.password)).toPromise();
      // @ts-ignore
      sessionStorage.setItem("token", data.token);
      // @ts-ignore
      sessionStorage.setItem("username", data.username)
      sessionStorage.setItem("logged", "true");

      await this.loadRole();

      window.location.reload();
      this.dialogRef.close();
    } catch (error) {
      console.error('Error logging in:', error);
      this.dialog.open(CommonDialogComponent, {
        width: '300px',
        data: {message: "Invalid email or password"}
      });
    }
  }

  onSignUp(): void {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(SignupDialogComponent, {
      disableClose: true,
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(() => {
    });
  }

  async loadRole() {
    try {
      let roleResponse = await (await this.authenticationService.getRole()).toPromise();
      // @ts-ignore
      let role = roleResponse.role;
      // @ts-ignore
      sessionStorage.setItem("role", role)
    } catch (error) {
      console.error('Error getting role:', error);
    }
  }
}
