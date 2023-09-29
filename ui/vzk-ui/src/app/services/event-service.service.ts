import { Injectable } from '@angular/core';
import { Event } from 'src/app/models/event';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  private events: Event[] = [
    {
      id: `123`,
      game: 'Event 1',
      datetime: new Date('2023-09-30T10:00:00'),
      description: 'Description for Event 1',
    },
    {
      id: `456`,
      game: 'Event 2',
      datetime: new Date('2023-10-01T15:30:00'),
      description: 'Description for Event 2',
    },
    // Add more events as needed
  ];

  getNextTwoEvents(): Event[] {
    // Sort events by datetime in ascending order
    this.events.sort((a, b) => a.datetime.getTime() - b.datetime.getTime());
    // Return the next two events
    return this.events.slice(0, 2);
  }
}
