import {Component, OnInit} from '@angular/core';
import {EventServiceService} from "../../../services/event-service/event-service.service";
import {Event} from "../../../models/event/event";

@Component({
  selector: 'app-schecule-page',
  templateUrl: './schedule-page.component.html',
  styleUrls: ['./schedule-page.component.css']
})
export class SchedulePageComponent implements OnInit{
  futureEvents: Event[] = [];
  constructor(private eventService: EventServiceService) {}

  ngOnInit(): void {
    this.futureEvents = this.eventService.getEvents();
  }
}
