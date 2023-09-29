export class Event {
  id: string;
  game: string;
  datetime: Date;
  description: string;

  constructor(id: string, datetime: Date, description: string, game: string) {
    this.id = id;
    this.datetime = datetime;
    this.description = description;
    this.game = game;
  }
}
