export class Result {
  id: string;
  title: string;
  game: string;
  dateTime: Date;
  description: string;
  enemyLogoURL: string;
  enemyResult: string;
  teamResult: string;
  replayURL: string;

  constructor(id: string, title: string, datetime: Date, description: string, game: string, enemyURL: string, enemyResult: string, teamResult: string,   replayURL: string) {
    this.id = id;
    this.title = title;
    this.dateTime = datetime;
    this.description = description;
    this.game = game;
    this.enemyLogoURL = enemyURL
    this.enemyResult = enemyResult;
    this.teamResult = teamResult;
    this.replayURL = replayURL;
  }
}
