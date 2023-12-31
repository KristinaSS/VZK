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
      email: [{value: '', disabled: true}],
      username: [''],
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

      const fNameChanged = fNameControl?.dirty && fNameControl?.valid;
      const lNameChanged = lNameControl?.dirty && lNameControl?.valid;
      const usernameChanged = usernameControl?.dirty && usernameControl?.valid;
      const passwordChanged = passwordControl?.dirty && passwordControl?.valid;
      const passwordAgainChanged = passwordAgainControl?.dirty && passwordAgainControl?.valid;

      // If password is dirty, mark passwordAgain as dirty
      if (passwordChanged && !passwordAgainControl?.dirty) {
        passwordAgainControl?.markAsDirty();
      }

      const areNamesFilled = (fNameControl?.value && lNameControl?.value) || (!fNameControl?.value && !lNameControl?.value);
      const areNamesValid = fNameControl?.valid && lNameControl?.valid;
      const areNamesChanged = (fNameChanged && lNameChanged) || (!fNameChanged && !lNameChanged);

      this.isUpdateDisabled = !(
        (areNamesChanged && areNamesValid && usernameControl?.valid && passwordControl?.valid && passwordAgainControl?.valid) ||
        (passwordChanged && passwordAgainChanged && areNamesValid && areNamesChanged && usernameControl?.valid) ||
        (areNamesChanged && usernameChanged && areNamesValid && passwordControl?.valid && passwordAgainControl?.valid)
      ) || !areNamesFilled;
    }
  }

  async onSubmitClick() {
    if (this.editForm.valid) {
      try {
        await (await this.authenticationService.updateAccount(this.editForm)).toPromise();
        console.log('Form submitted:', this.editForm.value);
        this.dialog.closeAll();
        let successDialog = this.dialog.open(CommonDialogComponent, {
          width: '300px',
          data: {message: "Account has been updated."}
        });

        successDialog.afterClosed().subscribe(() => {
          window.location.reload();
        });
      } catch (error) {
        console.error('Error occurred:', error);
        let errorDialog = this.dialog.open(CommonDialogComponent, {
          width: '300px',
          data: {message: "An error occurred while updating account."}
        });

        errorDialog.afterClosed().subscribe(() => {
          this.dialog.closeAll();
        });
      }
    }
  }
}
