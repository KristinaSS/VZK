import {Component, OnInit} from '@angular/core';
import { EventServiceService } from 'src/app/services/event-service.service';
import { Event } from 'src/app/models/event';
import {Result} from "../../models/result";

@Component({
  selector: 'app-schedule-box',
  templateUrl: './schedule-box.component.html',
  styleUrls: ['./schedule-box.component.css']
})
export class ScheduleBoxComponent implements OnInit{
  nextTwoEvents: Event[] = [];
  nextTwoResults: Result[] = [];
  currentContent: number = 1;
  button1Disabled: boolean = true;
  button2Disabled: boolean = false;

  constructor(private eventService: EventServiceService) {}

  ngOnInit(): void {
    this.nextTwoEvents = this.eventService.getNextTwoEvents();
    this.nextTwoResults = this.eventService.getNextTwoResults();
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
}
