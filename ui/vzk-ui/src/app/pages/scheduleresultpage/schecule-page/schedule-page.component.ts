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
export class SchedulePageComponent implements OnInit {
  futureEvents: Event[] = [];
  scrollDistance = 2;
  scrollUpDistance = 1;

  page = 0;
  isEndOfPage = false;

  constructor(private eventService: EventServiceService, private gameService: GameService) {
  }

  ngOnInit(): void {
    this.eventService.getEvents(this.page).subscribe(
      (data) => {
        this.futureEvents = data;
        if (data.length == 0) {
          this.isEndOfPage = true;
        }
        this.page++;
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }

  getGame(id: string): Game {
    return this.gameService.getGame(id);
  }

  loadData() {
    if (!this.isEndOfPage) {
      this.eventService.getEvents(this.page).subscribe(
        (data) => {
          this.futureEvents = [...this.futureEvents, ...data];
          if (data.length == 0) {
            this.isEndOfPage = true;
          }
          this.page++;
        }
      );
    }
  }
}
