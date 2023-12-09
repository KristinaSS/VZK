import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginDialogComponent} from "./login-dialog/login-dialog.component";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SignupDialogComponent } from './sign-up-dialog/signup-dialog.component';



@NgModule({
  declarations: [
    LoginDialogComponent,
    SignupDialogComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ]
})
export class SecurityModule { }
