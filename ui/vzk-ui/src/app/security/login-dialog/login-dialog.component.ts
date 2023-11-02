import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {
  username: string = ''; // Initialize with an empty string
  password: string = ''; // Initialize with an empty string


  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>) {}

  onLogin(): void {
    // Handle login logic here
    console.log('Login clicked');
    this.dialogRef.close();
  }

  onSignUp(): void {
    // Handle sign-up logic here
    console.log('Sign Up clicked');
    this.dialogRef.close();
  }
}
