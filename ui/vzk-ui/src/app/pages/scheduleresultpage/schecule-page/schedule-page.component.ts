import {Component, OnInit} from '@angular/core';
import {EventServiceService} from "../../../services/event-service/event-service.service";
import {Event} from "../../../models/event/event";
import {GameService} from "../../../services/game-service/game.service";
import {Game} from "../../../models/game/game";

@Component({
  selector: 'app-schecule-page',
  templateUrl: './schedule-page.component.html',
  styleUrls: ['./schedule-page.component.css']
})
export class SchedulePageComponent implements OnInit{
  futureEvents: Event[] = [];
  scrollDistance = 2;
  scrollUpDistance = 1;
  constructor(private eventService: EventServiceService, private gameService: GameService) {}

  ngOnInit(): void {
    this.futureEvents = this.eventService.getEvents();
  }

  getGame(id: string): Game{
    return this.gameService.getGame(id);
  }

  loadData() {
    if(this.futureEvents.length < 30){
      const newEvents = this.eventService.getEvents();
      this.futureEvents = this.futureEvents.concat(newEvents);
    }
  }
}
