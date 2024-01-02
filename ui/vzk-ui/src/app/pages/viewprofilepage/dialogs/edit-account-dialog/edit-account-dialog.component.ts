import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {
  firstLetterUppercaseValidator,
  passwordValidator,
  samePasswordValidator
} from "../../../../utils/validators/custom-contact-form-validators";
import {AuthenticationService} from "../../../../services/authentication-service/authentication.service";
import {Player} from "../../../../models/player/player";
import {CommonDialogComponent} from "../../../../utils/dialogs/common-dialog/common-dialog.component";

@Component({
  selector: 'app-edit-account-dialog',
  templateUrl: './edit-account-dialog.component.html',
  styleUrls: ['./edit-account-dialog.component.css']
})
export class EditAccountDialogComponent implements OnInit {
  account;
  editForm!: FormGroup;
  isUpdateDisabled = true;
  isEmailDisabled = true;

  constructor(public dialogRef: MatDialogRef<EditAccountDialogComponent>,
              private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              public dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: { acc: Player }
  ) {
    this.account = data.acc;
  }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      fName: ['', [Validators.minLength(3), firstLetterUppercaseValidator(), Validators.maxLength(50)]],
      lName: ['', [Validators.minLength(3), firstLetterUppercaseValidator(), Validators.maxLength(50)]],
      email: [{value: this.account.email, disabled: true}],
      username: ['', [Validators.minLength(3)]],
      password: ['', [passwordValidator(), Validators.maxLength(45)]],
      passwordAgain: ['', [passwordValidator(), Validators.maxLength(45), samePasswordValidator()]],
    });

    // Dynamic validation for 'passwordAgain' based on 'password'
    this.editForm.get('password')?.valueChanges.subscribe(() => {
      this.editForm.get('passwordAgain')?.updateValueAndValidity();
    });

    // Subscribe to form value changes and update the button state
    this.editForm.valueChanges.subscribe(() => {
      this.updateUpdateButtonState();
    });
  }

  updateUpdateButtonState() {
    if (this.editForm) {
      const fNameControl = this.editForm.get('fName');
      const lNameControl = this.editForm.get('lName');
      const usernameControl = this.editForm.get('username');
      const passwordControl = this.editForm.get('password');
      const passwordAgainControl = this.editForm.get('passwordAgain');

      const fNameChanged = fNameControl?.dirty && fNameControl?.valid && usernameControl?.valid;
      const lNameChanged = lNameControl?.dirty && lNameControl?.valid && usernameControl?.valid ;
      const usernameChanged = usernameControl?.dirty && usernameControl?.valid;
      const passwordChanged = passwordControl?.dirty && passwordControl?.valid;
      if (passwordChanged && !passwordAgainControl?.dirty) {
        passwordAgainControl?.markAsDirty();
      }
      const passwordAgainChanged = passwordAgainControl?.dirty && passwordAgainControl?.valid;

      const nameEmpty = (fNameControl == null || fNameControl.value.length == 0) && (lNameControl == null || lNameControl.value.length == 0);
      const passEmpty = (passwordControl == null || passwordControl.value.length == 0) && (passwordAgainControl == null || passwordAgainControl.value.length == 0);
      const usernameEmpty = usernameControl == null || usernameControl.value.length == 0;

      const isOneNameEmpty = (fNameControl == null || fNameControl.value.length == 0) || (lNameControl == null || lNameControl.value.length == 0);
      const isOnePassEmpty = (passwordControl == null || passwordControl.value.length == 0) || (passwordAgainControl == null || passwordAgainControl.value.length == 0);

      const arePassValid = passwordChanged && passwordAgainChanged && !isOnePassEmpty;
      const areNamesValid = fNameChanged && lNameChanged && !isOneNameEmpty;

      if(nameEmpty && passEmpty && usernameEmpty){
        console.log("0");
        this.isUpdateDisabled = true;
      }else if(nameEmpty && passEmpty && usernameChanged){
        console.log("1");
        this.isUpdateDisabled = false;
      } else if(nameEmpty && arePassValid && usernameEmpty){
        console.log("2");
        this.isUpdateDisabled = false;
      } else if(nameEmpty && arePassValid && usernameChanged){
        console.log("3");
        this.isUpdateDisabled = false;
      } else if(areNamesValid && passEmpty && usernameEmpty){
        console.log("4");
        this.isUpdateDisabled = false;
      } else if(areNamesValid && passEmpty && usernameChanged){
        console.log("5");
        this.isUpdateDisabled = false;
      } else if(areNamesValid && arePassValid && usernameEmpty){
        console.log("6");
        this.isUpdateDisabled = false;
      } else if(areNamesValid && arePassValid && usernameChanged){
        console.log("7");
        this.isUpdateDisabled = false;
      } else {
        console.log("default");
        this.isUpdateDisabled = true;
      }
    }
  }




  async onSubmitClick() {
    if (this.editForm.valid) {
      try {
        await (await this.authenticationService.updateAccount(this.editForm)).toPromise();
        console.log('Form submitted:', this.editForm.value);

        // Open the success dialog
        let successDialog = this.dialog.open(CommonDialogComponent, {
          width: '300px',
          data: { message: "Account has been updated." }
        });

        console.log("this.account.username " + this.account.username);

        // After closing the success dialog
        successDialog.afterClosed().subscribe(() => {
          // Close all dialogs
          this.dialog.closeAll();
          // Refresh the page
          window.location.reload();
        });
      } catch (error) {
        console.error('Error occurred:', error);

        // Open the error dialog
        let errorDialog = this.dialog.open(CommonDialogComponent, {
          width: '300px',
          data: { message: "An error occurred while updating account." }
        });

        // After closing the error dialog
        errorDialog.afterClosed().subscribe(() => {
          // Close all dialogs
          this.dialog.closeAll();
        });
      }
    }
  }

}
