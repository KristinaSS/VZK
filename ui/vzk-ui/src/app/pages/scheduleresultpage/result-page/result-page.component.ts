import { Component } from '@angular/core';
import {Event} from "../../../models/event/event";
import {EventServiceService} from "../../../services/event-service/event-service.service";
import {GameService} from "../../../services/game-service/game.service";
import {Game} from "../../../models/game/game";

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent {
  futureEvents: Event[] = [];
  constructor(private eventService: EventServiceService, private gameService: GameService) {}

  ngOnInit(): void {
    this.futureEvents = this.eventService.getEvents();
  }

  getGame(id: string): Game{
    return this.gameService.getGame();
  }
}
