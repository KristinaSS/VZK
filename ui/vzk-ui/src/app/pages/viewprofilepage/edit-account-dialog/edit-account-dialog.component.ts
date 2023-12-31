import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {
  firstLetterUppercaseValidator,
  passwordValidator,
  samePasswordValidator
} from "../../../utils/validators/custom-contact-form-validators";
import {AuthenticationService} from "../../../services/authentication-service/authentication.service";
import {Player} from "../../../models/player/player";

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
              @Inject(MAT_DIALOG_DATA) public data: { acc: Player }
  ) {
    this.account = data.acc;
  }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      fName: ['', [Validators.minLength(3), firstLetterUppercaseValidator(), Validators.maxLength(50)]],
      lName: ['', [Validators.minLength(3), firstLetterUppercaseValidator(), Validators.maxLength(50)]],
      email: [{value: '', disabled: this.isEmailDisabled}, [Validators.email, Validators.maxLength(100)]],
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
      const emailControl = this.editForm.get('email');
      const usernameControl = this.editForm.get('username');
      const passwordControl = this.editForm.get('password');
      const passwordAgainControl = this.editForm.get('passwordAgain');

      const fNameChanged = fNameControl?.dirty && fNameControl?.valid;
      const lNameChanged = lNameControl?.dirty && lNameControl?.valid;
      const emailChanged = emailControl?.dirty && emailControl?.valid;
      const usernameChanged = usernameControl?.dirty && usernameControl?.valid;
      const passwordChanged = passwordControl?.dirty && passwordControl?.valid;
      const passwordAgainChanged = passwordAgainControl?.dirty && passwordAgainControl?.valid;

      // If password is dirty, mark passwordAgain as dirty
      if (passwordChanged && !passwordAgainControl?.dirty) {
        passwordAgainControl?.markAsDirty();
      }

      if (
        (fNameChanged && lNameChanged && emailControl?.valid && usernameControl?.valid && passwordControl?.valid && passwordAgainControl?.valid) ||
        (passwordChanged && passwordAgainChanged && fNameControl?.valid && lNameControl?.valid && emailControl?.valid && usernameControl?.valid) ||
        (emailChanged && fNameControl?.valid && lNameControl?.valid && usernameControl?.valid && passwordControl?.valid && passwordAgainControl?.valid) ||
        (usernameChanged && fNameControl?.valid && lNameControl?.valid && emailControl?.valid && passwordControl?.valid && passwordAgainControl?.valid)
      ) {
        this.isUpdateDisabled = false;
      } else {
        this.isUpdateDisabled = true;
      }
    }
  }


  onSubmitClick(): void {
    this.dialogRef.close();
    /*
    *     if (this.signupForm.valid) {
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
    * */
  }
}
