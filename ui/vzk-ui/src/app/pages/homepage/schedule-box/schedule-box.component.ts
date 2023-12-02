import {Component, Input, OnInit} from '@angular/core';
import {EventServiceService} from 'src/app/services/event-service/event-service.service';
import {Event} from 'src/app/models/event/event';
import {Result} from "../../../models/result/result";
import {Router} from "@angular/router";
import {Translation} from "../../../models/translation/translation";
import {Game} from "../../../models/game/game";
import {GameService} from "../../../services/game-service/game.service";

@Component({
  selector: 'app-schedule-box',
  templateUrl: './schedule-box.component.html',
  styleUrls: ['./schedule-box.component.css']
})
export class ScheduleBoxComponent implements OnInit {
  nextTwoEvents: Event[] = [];
  nextTwoResults: Result[] = [];
  currentContent: number = 1;
  button1Disabled: boolean = true;
  button2Disabled: boolean = false;

  @Input() translationsAbout!: { [key: string]: Translation };

  constructor(
    private eventService: EventServiceService,
    private router: Router,
    private gameService: GameService
  ) {
  }

  ngOnInit(): void {
    this.eventService.getEvents(0).subscribe(
      (data) => {
        this.nextTwoEvents = data.slice(0, 2);
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );

    this.eventService.getResults(0).subscribe(
      (data) => {
        this.nextTwoResults = data.slice(0, 2);
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    )
  }

  showContent(contentNumber: number): void {
    if (contentNumber === 1) {
      this.currentContent = 1;
      this.button1Disabled = true;
      this.button2Disabled = false;
    } else if (contentNumber === 2) {
      this.currentContent = 2;
      this.button1Disabled = false;
      this.button2Disabled = true;
    }
  }

  viewMore(number: number) {
    if (number == 1) {
      this.router.navigate(['/schedule']).then(r => {
        window.scrollTo(0, 0);
      });
    }
    if (number == 2) {
      this.router.navigate(['/schedule']).then(r => {
        window.scrollTo(0, 0);
      });
    }
  }

  getTranslation(id: string) {
    return this.translationsAbout[id].content;
  }

  getGame(id: string): Game {
    return this.gameService.getGame(id);
  }
}
