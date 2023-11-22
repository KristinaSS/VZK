import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginDialogComponent} from "./login-dialog/login-dialog.component";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [
    LoginDialogComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
  ]
})
export class SecurityModule { }