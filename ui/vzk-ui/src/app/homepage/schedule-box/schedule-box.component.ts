import {Component, OnInit} from '@angular/core';
import { EventServiceService } from 'src/app/services/event-service.service';
import { Event } from 'src/app/models/event';

@Component({
  selector: 'app-schedule-box',
  templateUrl: './schedule-box.component.html',
  styleUrls: ['./schedule-box.component.css']
})
export class ScheduleBoxComponent implements OnInit{
  nextTwoEvents: Event[] = [];

  constructor(private eventService: EventServiceService) {}

  ngOnInit(): void {
    this.nextTwoEvents = this.eventService.getNextTwoEvents();
  }
}
