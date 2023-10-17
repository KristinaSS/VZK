import { Injectable } from '@angular/core';
import { Event } from 'src/app/models/event/event';
import {Result} from "../../models/result/result";

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  private events: Event[] = [
    {
      id: `123`,
      title: 'VZK vs RUD',
      game: 'League of Legends',
      datetime: new Date('2023-09-30T10:00:00'),
      description: 'Ruddy Esports Game. UKEL Regular Split',
      enemyLogoURL: 'https://static.gosugamers.net/52/88/c1/f8a38bdf4242d2de18d122af7e1c0199564504f44ee6eb46673612038f.png?w=150&dpr=1',
    },
    {
      id: `456`,
      title: 'VZK vs VNC',
      game: 'League of Legends',
      datetime: new Date('2023-10-01T15:30:00'),
      description: 'Venomcrest Game. UKEL Regular Split',
      enemyLogoURL: 'https://game-tournaments.com/media/logo/_90/t95126.webp',
    },
    {
      id: `789`,
      title: 'VZK vs BFS',
      game: 'League of Legends',
      datetime: new Date('2023-10-02T15:30:00'),
      description: 'Belfast Storm Game. UKEL Regular Split',
      enemyLogoURL: 'https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-6/327339028_3350462388604806_8503409016915163023_n.png?_nc_cat=106&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=2kX1mmHIwZMAX_ZscS0&_nc_ht=scontent.fsof8-1.fna&oh=00_AfCcb4mHWaS7rBg9S_Nuf6PjI0pl6rmfJIs4Jp19Z0Ot_Q&oe=651CA981',
    },
    {
      id: `123`,
      title: 'VZK vs RUD',
      game: 'League of Legends',
      datetime: new Date('2023-10-04T10:00:00'),
      description: 'Ruddy Esports Game. UKEL Regular Split',
      enemyLogoURL: 'https://static.gosugamers.net/52/88/c1/f8a38bdf4242d2de18d122af7e1c0199564504f44ee6eb46673612038f.png?w=150&dpr=1',
    },
    {
      id: `456`,
      title: 'VZK vs VNC',
      game: 'League of Legends',
      datetime: new Date('2023-10-02T15:30:00'),
      description: 'Venomcrest Game. UKEL Regular Split',
      enemyLogoURL: 'https://game-tournaments.com/media/logo/_90/t95126.webp',
    },
    {
      id: `789`,
      title: 'VZK vs BFS',
      game: 'League of Legends',
      datetime: new Date('2023-10-10T15:30:00'),
      description: 'Belfast Storm Game. UKEL Regular Split',
      enemyLogoURL: 'https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-6/327339028_3350462388604806_8503409016915163023_n.png?_nc_cat=106&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=2kX1mmHIwZMAX_ZscS0&_nc_ht=scontent.fsof8-1.fna&oh=00_AfCcb4mHWaS7rBg9S_Nuf6PjI0pl6rmfJIs4Jp19Z0Ot_Q&oe=651CA981',
    },
  ];

  private results: Result[] = [
    {
      id: `123`,
      title: 'VZK vs RUD',
      game: 'League of Legends',
      datetime: new Date('2023-09-30T10:00:00'),
      description: 'Ruddy Esports Game. UKEL Regular Split',
      enemyLogoURL: 'https://static.gosugamers.net/52/88/c1/f8a38bdf4242d2de18d122af7e1c0199564504f44ee6eb46673612038f.png?w=150&dpr=1',
      enemyResult: '2',
      teamResult: '1'
    },
    {
      id: `456`,
      title: 'VZK vs VNC',
      game: 'League of Legends',
      datetime: new Date('2023-10-01T15:30:00'),
      description: 'Venomcrest Game. UKEL Regular Split',
      enemyLogoURL: 'https://game-tournaments.com/media/logo/_90/t95126.webp',
      enemyResult: '0',
      teamResult: '3'
    },
    {
      id: `789`,
      title: 'VZK vs BFS',
      game: 'League of Legends',
      datetime: new Date('2023-10-02T15:30:00'),
      description: 'Belfast Storm Game. UKEL Regular Split',
      enemyLogoURL: 'https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-6/327339028_3350462388604806_8503409016915163023_n.png?_nc_cat=106&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=2kX1mmHIwZMAX_ZscS0&_nc_ht=scontent.fsof8-1.fna&oh=00_AfCcb4mHWaS7rBg9S_Nuf6PjI0pl6rmfJIs4Jp19Z0Ot_Q&oe=651CA981',
      enemyResult: '1',
      teamResult: '2'
    },
  ];

  getNextTwoEvents(): Event[] {
    // Sort events by datetime in ascending order
    this.events.sort((a, b) => a.datetime.getTime() - b.datetime.getTime());
    // Return the next two events
    return this.events.slice(0, 2);
  }

  getNextTwoResults(): Result[] {
    // Sort events by datetime in ascending order
    this.results.sort((a, b) => b.datetime.getTime() - a.datetime.getTime());
    // Return the next two events
    return this.results.slice(0, 2);
  }

  getEvents(): Event[]{
    this.results.sort((a, b) => b.datetime.getTime() - a.datetime.getTime());
    return this.events;
  }
}
