import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Game} from '../../../models/game/game';
import {GameService} from '../../../services/game-service/game.service';
import {CountryService} from '../../../services/country-service/country.service';

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
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      topic: ['', Validators.required],
      comments: ['', Validators.required],
      applicationType: ['', Validators.required],
      profileURL: ['', Validators.required],
      game: ['', Validators.required],
      role: ['', Validators.required],
      maxRank: ['', Validators.required],
      gender: ['', Validators.required],
      birthday: ['', Validators.required],
      country: ['', Validators.required],
      description: ['', Validators.required],
      consent: ['', Validators.required],
    });
  }

  getRoles(gameId: string) {
    return this.gameService.getGameRoles(gameId);
  }

  getRanks(gameId: string) {
    return this.gameService.getGameRanks(gameId);
  }

  submitForm() {
    // Add logic to handle form submission (e.g., send data to a server)
    console.log('Form submitted:', this.contactForm.value);
  }

  onGameChange() {
    console.log('Game changed:', this.contactForm.value.game);
    this.roles = this.getRoles(this.contactForm.value.game);
    this.ranks = this.getRanks(this.contactForm.value.game);

    this.countryService.getCountries().subscribe((data) => {
      this.countries = data.sort((a, b) => a.name.localeCompare(b.name));
    });
    this.cd.detectChanges();
  }
}
