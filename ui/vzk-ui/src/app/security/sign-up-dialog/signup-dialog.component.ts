import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CommonDialogComponent} from "../../utils/dialogs/common-dialog/common-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {AuthenticationService} from "../../services/authentication-service/authentication.service";

@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrls: ['./signup-dialog.component.css']
})
export class SignupDialogComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async onSubmit() {
    if (this.signupForm.valid) {
      try {
        await (await this.authenticationService.signup(this.signupForm)).toPromise();
        console.log('Form submitted:', this.signupForm.value);
        this.dialog.closeAll();
        this.dialog.open(CommonDialogComponent, {
          width: '300px',
          data: { message: "Please check your email to activate your account!" }
        });
      } catch (error) {
        console.error('Error occurred:', error);
        this.dialog.open(CommonDialogComponent, {
          width: '300px',
          data: { message: "Account with this email already exists." }
        });
      }
    }
  }
}
