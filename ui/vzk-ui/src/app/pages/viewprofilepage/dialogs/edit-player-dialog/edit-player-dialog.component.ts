import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AuthenticationService} from "../../../../services/authentication-service/authentication.service";
import {Player} from "../../../../models/player/player";
import {ageValidator, urlValidator} from "../../../../utils/validators/custom-contact-form-validators";
import {CommonDialogComponent} from "../../../../utils/dialogs/common-dialog/common-dialog.component";
import {CountryService} from "../../../../services/country-service/country.service";

@Component({
  selector: 'app-edit-player-dialog',
  templateUrl: './edit-player-dialog.component.html',
  styleUrls: ['./edit-player-dialog.component.css']
})
export class EditPlayerDialogComponent {
  account;
  editForm!: FormGroup;
  isUpdateDisabled = true;
  countries: any[] = [];

  constructor(public dialogRef: MatDialogRef<EditPlayerDialogComponent>,
              private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private countryService: CountryService,
              public dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: { acc: Player }
  ) {
    this.account = data.acc;
  }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      countryOrigin: [''],
      birthday: ['', [ageValidator(16)]],
      gender: [''],
      playerName: [''],
      image: [''],//todo add image dropdown and pick and update "updateUpdateButtonState()"
      instagram: ['', [urlValidator()]],
      twitter: ['', [urlValidator()]],
      twitch: ['', [urlValidator()]],
      youtube: ['', [urlValidator()]],
    });

    // Subscribe to form value changes and update the button state
    this.editForm.valueChanges.subscribe(() => {
      this.updateUpdateButtonState();
    });

    this.countryService.getCountries().subscribe((data) => {
      this.countries = data.sort((a, b) => a.name.localeCompare(b.name));
    });
  }

  updateUpdateButtonState() {
    if (this.editForm) {
      const countryControl = this.editForm.get('countryOrigin');
      const birthdayControl = this.editForm.get('birthday');
      const genderControl = this.editForm.get('gender');
      const playerNameControl = this.editForm.get('playerName');
      const instagramControl = this.editForm.get('instagram');
      const twitterControl = this.editForm.get('twitter');
      const twitchControl = this.editForm.get('twitch');
      const youtubeControl = this.editForm.get('youtube');

      // Check if at least one control has changed and is not empty
      const isAnyControlChanged =
        (countryControl?.dirty && countryControl?.value !== '') ||
        (birthdayControl?.dirty && birthdayControl?.value !== '') ||
        (genderControl?.dirty && genderControl?.value !== '') ||
        (playerNameControl?.dirty && playerNameControl?.value !== '') ||
        (instagramControl?.dirty && instagramControl?.value !== '') ||
        (twitterControl?.dirty && twitterControl?.value !== '') ||
        (twitchControl?.dirty && twitchControl?.value !== '') ||
        (youtubeControl?.dirty && youtubeControl?.value !== '');

      // Check if all changed controls are valid
      const areAllControlsValid =
        (!countryControl?.dirty || (countryControl?.dirty && countryControl?.valid)) &&
        (!birthdayControl?.dirty || (birthdayControl?.dirty && birthdayControl?.valid)) &&
        (!genderControl?.dirty || (genderControl?.dirty && genderControl?.valid)) &&
        (!playerNameControl?.dirty || (playerNameControl?.dirty && playerNameControl?.valid)) &&
        (!instagramControl?.dirty || (instagramControl?.dirty && instagramControl?.valid)) &&
        (!twitterControl?.dirty || (twitterControl?.dirty && twitterControl?.valid)) &&
        (!twitchControl?.dirty || (twitchControl?.dirty && twitchControl?.valid)) &&
        (!youtubeControl?.dirty || (youtubeControl?.dirty && youtubeControl?.valid));

      // Enable the button if at least one control has changed, is not empty, and all changed controls are valid
      this.isUpdateDisabled = !(isAnyControlChanged && areAllControlsValid);
    }
  }

  async onSubmitClick() {
    if (this.editForm.valid) {
      try {
        await (await this.authenticationService.updatePlayer(this.editForm)).toPromise();
        console.log('Form submitted:', this.editForm.value);
        this.dialog.closeAll();
        let successDialog = this.dialog.open(CommonDialogComponent, {
          width: '300px',
          data: {message: "Player has been updated."}
        });

        successDialog.afterClosed().subscribe(() => {
          window.location.reload();
        });
      } catch (error) {
        console.error('Error occurred:', error);
        let errorDialog = this.dialog.open(CommonDialogComponent, {
          width: '300px',
          data: {message: "An error occurred while updating player."}
        });

        errorDialog.afterClosed().subscribe(() => {
          this.dialog.closeAll();
        });
      }
    }
  }
}
