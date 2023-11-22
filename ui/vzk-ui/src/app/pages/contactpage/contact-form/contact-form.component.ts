import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Game} from '../../../models/game/game';
import {GameService} from '../../../services/game-service/game.service';
import {CountryService} from '../../../services/country-service/country.service';
import {
  ageValidator,
  firstLetterUppercaseValidator,
  urlValidator
} from "../../../utils/validators/custom-contact-form-validators";
import {Translation} from "../../../models/translation/translation";
import {Role} from "../../../models/role/role";
import {RoleService} from "../../../services/role-service/role.service";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ContactFormComponent implements OnInit {
  games: Game[] = [];
  gameRoles: String[] = [];
  ranks: String[] = [];
  countries: any[] = [];
  orgRoles: Role[] = [];

  contactForm!: FormGroup;

  characterCount = 0;
  maxCharacterLimit = 512;
  isSubmitDisabled = true;

  @Input() translationsAbout!: { [key: string]: Translation };

  constructor(
    private fb: FormBuilder,
    private gameService: GameService,
    private countryService: CountryService,
    private cd: ChangeDetectorRef,
    private roleService: RoleService,
  ) {
  }

  ngOnInit(): void {
    this.gameService.getGames().subscribe(
      (data: Game[]) => {
        this.games = data;
      },
      (error) => {
        console.error('Error fetching games:', error);
      }
    );

    this.orgRoles = this.roleService.getRoles();

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
    this.gameRoles = this.getRoles(this.contactForm.value.game);
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

  scrollToTop() {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getTranslation(id: string) {
    return this.translationsAbout[id].content;
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
}
