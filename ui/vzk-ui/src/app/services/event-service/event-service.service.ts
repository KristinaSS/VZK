import {Injectable} from '@angular/core';
import {Event} from 'src/app/models/event/event';
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
      enemyLogoURL: 'https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-1/327339028_3350462388604806_8503409016915163023_n.png?stp=dst-png_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=L_RzXKU4LLwAX_razjA&_nc_ht=scontent.fsof8-1.fna&oh=00_AfD8A5FA-gPr8ZGtyjAkRXQv-a7etiuiLSM91YuYbomQ6Q&oe=6532FFC3',
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
      enemyLogoURL: 'https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-1/327339028_3350462388604806_8503409016915163023_n.png?stp=dst-png_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=L_RzXKU4LLwAX_razjA&_nc_ht=scontent.fsof8-1.fna&oh=00_AfD8A5FA-gPr8ZGtyjAkRXQv-a7etiuiLSM91YuYbomQ6Q&oe=6532FFC3',
    },
  ];

  private results: Result[] = [
    {
      id: `1`,
      title: 'VZK vs RUD',
      game: 'League of Legends',
      datetime: new Date('2023-09-30T10:00:00'),
      description: 'Ruddy Esports Game. UKEL Regular Split',
      enemyLogoURL: 'https://static.gosugamers.net/52/88/c1/f8a38bdf4242d2de18d122af7e1c0199564504f44ee6eb46673612038f.png?w=150&dpr=1',
      enemyResult: '2',
      teamResult: '1',
      replayURL: `https://www.twitch.tv/videos/1952596622?filter=archives&sort=time`
    },
    {
      id: `2`,
      title: 'VZK vs VNC',
      game: 'League of Legends',
      datetime: new Date('2023-10-01T15:30:00'),
      description: 'Venomcrest Game. UKEL Regular Split',
      enemyLogoURL: 'https://game-tournaments.com/media/logo/_90/t95126.webp',
      enemyResult: '0',
      teamResult: '3',
      replayURL: `https://www.twitch.tv/videos/1952596622?filter=archives&sort=time`
    },
    {
      id: `3`,
      title: 'VZK vs BFS',
      game: 'League of Legends',
      datetime: new Date('2023-10-02T15:30:00'),
      description: 'Belfast Storm Game. UKEL Regular Split',
      enemyLogoURL: 'https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-1/327339028_3350462388604806_8503409016915163023_n.png?stp=dst-png_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=L_RzXKU4LLwAX_razjA&_nc_ht=scontent.fsof8-1.fna&oh=00_AfD8A5FA-gPr8ZGtyjAkRXQv-a7etiuiLSM91YuYbomQ6Q&oe=6532FFC3',
      enemyResult: '1',
      teamResult: '2',
      replayURL: `https://www.twitch.tv/videos/1952596622?filter=archives&sort=time`
    },
    {
      id: `4`,
      title: 'VZK vs RUD',
      game: 'League of Legends',
      datetime: new Date('2023-10-03T10:00:00'),
      description: 'Ruddy Esports Game. UKEL Regular Split',
      enemyLogoURL: 'https://static.gosugamers.net/52/88/c1/f8a38bdf4242d2de18d122af7e1c0199564504f44ee6eb46673612038f.png?w=150&dpr=1',
      enemyResult: '2',
      teamResult: '1',
      replayURL: `https://www.twitch.tv/videos/1952596622?filter=archives&sort=time`
    },
    {
      id: `5`,
      title: 'VZK vs VNC',
      game: 'League of Legends',
      datetime: new Date('2023-10-04T15:30:00'),
      description: 'Venomcrest Game. UKEL Regular Split',
      enemyLogoURL: 'https://game-tournaments.com/media/logo/_90/t95126.webp',
      enemyResult: '0',
      teamResult: '3',
      replayURL: `https://www.twitch.tv/videos/1952596622?filter=archives&sort=time`
    },
    {
      id: `6`,
      title: 'VZK vs BFS',
      game: 'League of Legends',
      datetime: new Date('2023-10-05T15:30:00'),
      description: 'Belfast Storm Game. UKEL Regular Split',
      enemyLogoURL: 'https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-1/327339028_3350462388604806_8503409016915163023_n.png?stp=dst-png_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=L_RzXKU4LLwAX_razjA&_nc_ht=scontent.fsof8-1.fna&oh=00_AfD8A5FA-gPr8ZGtyjAkRXQv-a7etiuiLSM91YuYbomQ6Q&oe=6532FFC3',
      enemyResult: '1',
      teamResult: '2',
      replayURL: `https://www.twitch.tv/videos/1952596622?filter=archives&sort=time`
    },
    {
      id: `7`,
      title: 'VZK vs RUD',
      game: 'League of Legends',
      datetime: new Date('2023-10-06T10:00:00'),
      description: 'Ruddy Esports Game. UKEL Regular Split',
      enemyLogoURL: 'https://static.gosugamers.net/52/88/c1/f8a38bdf4242d2de18d122af7e1c0199564504f44ee6eb46673612038f.png?w=150&dpr=1',
      enemyResult: '2',
      teamResult: '1',
      replayURL: `https://www.twitch.tv/videos/1952596622?filter=archives&sort=time`
    },
    {
      id: `8`,
      title: 'VZK vs VNC',
      game: 'League of Legends',
      datetime: new Date('2023-10-07T15:30:00'),
      description: 'Venomcrest Game. UKEL Regular Split',
      enemyLogoURL: 'https://game-tournaments.com/media/logo/_90/t95126.webp',
      enemyResult: '2',
      teamResult: '1',
      replayURL: `https://www.twitch.tv/videos/1952596622?filter=archives&sort=time`
    },
    {
      id: `9`,
      title: 'VZK vs BFS',
      game: 'League of Legends',
      datetime: new Date('2023-10-08T15:30:00'),
      description: 'Belfast Storm Game. UKEL Regular Split',
      enemyLogoURL: 'https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-1/327339028_3350462388604806_8503409016915163023_n.png?stp=dst-png_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=L_RzXKU4LLwAX_razjA&_nc_ht=scontent.fsof8-1.fna&oh=00_AfD8A5FA-gPr8ZGtyjAkRXQv-a7etiuiLSM91YuYbomQ6Q&oe=6532FFC3',
      enemyResult: '0',
      teamResult: '3',
      replayURL: `https://www.twitch.tv/videos/1952596622?filter=archives&sort=time`
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

  getEvents(): Event[] {
    this.results.sort((a, b) => b.datetime.getTime() - a.datetime.getTime());
    return this.events;
  }

  getResults(): Result[] {
    this.results.sort((a, b) => b.datetime.getTime() - a.datetime.getTime());
    return this.results;
  }
}
