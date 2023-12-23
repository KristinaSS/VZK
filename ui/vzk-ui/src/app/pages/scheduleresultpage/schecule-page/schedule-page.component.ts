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
  futureEvents: Event[] | undefined = [];
  scrollDistance = 2;
  scrollUpDistance = 1;
  selectedSortOption: string = 'soonest'; // Default value

  page = 0;
  isEndOfPage = false;

  constructor(private eventService: EventServiceService, private gameService: GameService) {
  }

  // @ts-ignore
  private ngOnInitPromise: Promise<void>;
  // @ts-ignore
  private ngOnInitResolve: () => void;

  async ngOnInit() {
    if (!this.ngOnInitPromise) {
      this.ngOnInitPromise = new Promise<void>((resolve) => {
        this.ngOnInitResolve = resolve;
      });
    }

    try {
      this.futureEvents = await (await this.eventService.getEvents(0, this.selectedSortOption)).toPromise();
      if (this.futureEvents?.length === 0) {
        this.isEndOfPage = true;
      }
      this.page++;
      this.ngOnInitResolve(); // Resolve the promise to signal that ngOnInit has completed
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  }

  async loadData() {
    // Ensure that ngOnInit has completed before proceeding
    await this.ngOnInitPromise;

    try {
      let data = await (await this.eventService.getEvents(this.page, this.selectedSortOption)).toPromise();
      // @ts-ignore
      this.futureEvents = [...this.futureEvents, ...data];

      if (data?.length === 0) {
        this.isEndOfPage = true;
      }
      this.page++;
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  }


  getGame(id: string): Game {
    return this.gameService.getGame(id);
  }

  async onSortOptionChange() {
    console.log('Selected sort option:', this.selectedSortOption);
    this.page = 0;
    try {
      this.futureEvents = await (await this.eventService.getEvents(0, this.selectedSortOption)).toPromise();
      if (this.futureEvents?.length === 0) {
        this.isEndOfPage = true;
      }
      this.page++;
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  }
}
