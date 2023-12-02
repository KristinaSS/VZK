export class Event {
  id: string;
  name: string;
  game: string;
  date: Date;
  info: string;
  enemyLogo: string;

  constructor(id: string, title: string, datetime: Date, description: string, game: string, enemyURL: string) {
    this.id = id;
    this.name = title;
    this.date = datetime;
    this.info = description;
    this.game = game;
    this.enemyLogo = enemyURL;
  }
}
