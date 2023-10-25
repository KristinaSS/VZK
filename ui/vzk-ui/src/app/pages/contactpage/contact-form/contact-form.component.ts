import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Game} from '../../../models/game/game';
import {GameService} from '../../../services/game-service/game.service';
import {CountryService} from '../../../services/country-service/country.service';
import {
  ageValidator,
  firstLetterUppercaseValidator,
  urlValidator
} from "../../../utils/validators/custom-contact-form-validators";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ContactFormComponent implements OnInit {
  games: Game[] = [];
  roles: String[] = [];
  ranks: String[] = [];
  countries: any[] = [];

  contactForm!: FormGroup;

  characterCount = 0;
  maxCharacterLimit = 512;
  isSubmitDisabled = true; // Initially, the button is disabled

  constructor(
    private fb: FormBuilder,
    private gameService: GameService,
    private countryService: CountryService,
    private cd: ChangeDetectorRef,
  ) {
  }

  ngOnInit(): void {
    this.games = this.gameService.getGames();

    this.contactForm = this.fb.group({
      fName: ['', [Validators.required, Validators.minLength(3), firstLetterUppercaseValidator(), Validators.maxLength(50)]],
      lName: ['', [Validators.required, Validators.minLength(3), firstLetterUppercaseValidator(), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      topic: ['', Validators.required],
      comments: ['', Validators.required],
      applicationType: ['', Validators.required],
      profileURL: ['', [Validators.required, urlValidator()]],
      game: ['', Validators.required],
      role: ['', Validators.required],
      maxRank: ['', Validators.required],
      gender: ['', Validators.required],
      birthday: ['', [Validators.required, ageValidator(16)]],
      country: ['', Validators.required],
      description: ['', Validators.required],
      consent: false,
    });

    // Subscribe to form value changes and update the button state
    this.contactForm.valueChanges.subscribe(() => {
      this.updateSubmitButtonState();
    });
  }

  getRoles(gameId: string) {
    return this.gameService.getGameRoles(gameId);
  }

  getRanks(gameId: string) {
    return this.gameService.getGameRanks(gameId);
  }

  onGameChange() {
    this.roles = this.getRoles(this.contactForm.value.game);
    this.ranks = this.getRanks(this.contactForm.value.game);

    this.countryService.getCountries().subscribe((data) => {
      this.countries = data.sort((a, b) => a.name.localeCompare(b.name));
    });

    const fieldsToClear = ['profileURL', 'role', 'maxRank'];

    this.clearFields(fieldsToClear);

    this.cd.detectChanges();
  }

  onTopicChange() {
    const fieldsToClear = ['game', 'applicationType', 'profileURL', 'role', 'maxRank', 'gender', 'birthday', 'country', 'description', 'comments'];

    this.clearFields(fieldsToClear);
  }

  onApplicationTypeChange() {
    const fieldsToClear = ['profileURL', 'role', 'maxRank'];

    this.clearFields(fieldsToClear);
  }

  onInput(event: Event, textArea: string): void {
    const textareaValue = (event.target as HTMLTextAreaElement).value;
    this.characterCount = textareaValue.length;

    // Disable textarea when character limit is reached
    if (this.characterCount > this.maxCharacterLimit) {
      const truncatedValue = textareaValue.slice(0, this.maxCharacterLimit);
      this.contactForm.get(textArea)?.setValue(truncatedValue);
      this.characterCount = this.maxCharacterLimit;
    }
  }


  updateSubmitButtonState() {
    if (this.contactForm) {
      this.isSubmitDisabled = !((
          this.contactForm.get('consent')?.value == true &&
          this.contactForm.get('fName')?.valid &&
          this.contactForm.get('lName')?.valid &&
          this.contactForm.get('email')?.valid &&
          this.contactForm.get('topic')?.valid &&
          this.contactForm.get('comments')?.valid)
        ||
        (
          this.contactForm.get('fName')?.valid &&
          this.contactForm.get('lName')?.valid &&
          this.contactForm.get('email')?.valid &&
          this.contactForm.get('topic')?.valid &&
          this.contactForm.get('game')?.valid &&
          this.contactForm.get('applicationType')?.valid &&
          this.contactForm.get('gender')?.valid &&
          this.contactForm.get('birthday')?.valid &&
          this.contactForm.get('country')?.valid &&
          this.contactForm.get('description')?.valid &&
          this.contactForm.get('consent')?.value == true
        )
        ||
        (
          this.contactForm.get('fName')?.valid &&
          this.contactForm.get('lName')?.valid &&
          this.contactForm.get('email')?.valid &&
          this.contactForm.get('topic')?.valid &&
          this.contactForm.get('game')?.valid &&
          this.contactForm.get('applicationType')?.valid &&
          this.contactForm.get('profileURL')?.valid &&
          this.contactForm.get('role')?.valid &&
          this.contactForm.get('maxRank')?.valid &&
          this.contactForm.get('gender')?.valid &&
          this.contactForm.get('birthday')?.valid &&
          this.contactForm.get('country')?.valid &&
          this.contactForm.get('description')?.valid &&
          this.contactForm.get('consent')?.value == true
        ));
    }
  }



  submitForm() {
    // Add logic to handle form submission (e.g., send data to a server)
    console.log('Form submitted:', this.contactForm.value);
  }

  private clearFields(fieldsToClear: string[]) {
    fieldsToClear.forEach(controlName => {
      const control = this.contactForm.get(controlName);

      // Check if control is not null
      if (control) {
        // Reset value
        control.setValue('');

        // Mark as untouched and pristine
        control.markAsUntouched();
        control.markAsPristine();

        // Update value and validity
        control.updateValueAndValidity();
      }
    });
  }

  scrollToTop() {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
