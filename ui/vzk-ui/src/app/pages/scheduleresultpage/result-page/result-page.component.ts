import {Component, OnInit} from '@angular/core';
import {EventServiceService} from "../../../services/event-service/event-service.service";
import {GameService} from "../../../services/game-service/game.service";
import {Game} from "../../../models/game/game";
import {Result} from "../../../models/result/result";

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {
  results: Result[] = [];
  scrollDistance = 2;
  scrollUpDistance = 1;

  constructor(private eventService: EventServiceService, private gameService: GameService) {
  }

  ngOnInit(): void {
    this.results = this.eventService.getResults();
  }

  getGame(id: string): Game {
    return this.gameService.getGame(id);
  }

  loadData() {
    console.log(this.results.length)
    if (this.results.length < 30) {
      const newEvents = this.eventService.getResults();
      this.results = this.results.concat(newEvents);
    }
  }

  openReplay(url: string) {
    window.open(url, '_blank');
  }

}
