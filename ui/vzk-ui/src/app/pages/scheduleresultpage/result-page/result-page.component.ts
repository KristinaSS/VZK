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

  page = 0;
  isEndOfPage = false;

  constructor(private eventService: EventServiceService, private gameService: GameService) {
  }

  ngOnInit(): void {
    this.eventService.getResults(this.page).subscribe(
      (data) => {
        this.results = data;
        if (data.length == 0) {
          this.isEndOfPage = true;
        }
        this.page++;
      },
      (error) => {
        console.error('Error fetching results:', error);
      }
    );
  }

  getGame(id: string): Game {
    return this.gameService.getGame(id);
  }

  loadData() {
    if (!this.isEndOfPage) {
      this.eventService.getResults(this.page).subscribe(
        (data) => {
          this.results = [...this.results, ...data];
          if (data.length == 0) {
            this.isEndOfPage = true;
          }
          this.page++;
        }
      );
    }
  }

  openReplay(url: string) {
    window.open(url, '_blank');
  }

}
