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
  results: Result[] | undefined = [];
  scrollDistance = 2;
  scrollUpDistance = 1;

  page = 0;
  isEndOfPage = false;
  private ngOnInitCalled = false;

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
      this.results = await (await this.eventService.getResults(0)).toPromise();
      if (this.results?.length === 0) {
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
      let data = await (await this.eventService.getResults(this.page)).toPromise();
      // @ts-ignore
      this.results = [...this.results, ...data];

      if (data?.length === 0) {
        this.isEndOfPage = true;
      }
      this.page++;
    } catch (error) {
      console.error('Error fetching results:', error);
    }
  }


  getGame(id: string): Game {
    return this.gameService.getGame(id);
  }

  openReplay(url: string) {
    window.open(url, '_blank');
  }

}
