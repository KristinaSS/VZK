import {Component} from '@angular/core';
import {Game} from "../../../models/game/game";
import {GameService} from "../../../services/game-service/game.service";
import {CountryService} from "../../../services/country-service/country.service";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  games: Game[] = [];
  roles: String[] = [];
  ranks: String[] = [];
  countries: any[] = [];


  formData = {
    fName: '',
    lName: '',
    email: '',
    topic: '',
    comments: '',
    applicationType: '',
    profileURL: '',
    game: '',
    role: '',
    maxRank: '',
    gender: '',
    birthday: '',
    country: '',
    description: '',
    consent: '',
  };


  constructor(private gameService: GameService, private countryService: CountryService) {
    this.games = gameService.getGames();
  }

  getRoles(gameId: string){
    return this.gameService.getGameRoles(gameId);
  }

  getRanks(gameId: string){
    return this.gameService.getGameRanks(gameId);
  }

  submitForm() {
    // Add logic to handle form submission (e.g., send data to a server)
    console.log('Form submitted:', this.formData);
  }

  onGameChange() {
    this.roles = this.getRoles(this.formData.game);
    this.ranks = this.getRanks(this.formData.game);

    this.countryService.getCountries().subscribe((data) => {
      this.countries = data.sort((a, b) => a.name.localeCompare(b.name));
    });
  }
}
