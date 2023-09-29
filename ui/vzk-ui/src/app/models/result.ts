export class Result {
  id: string;
  title: string;
  game: string;
  datetime: Date;
  description: string;
  enemyLogoURL: string;
  enemyResult: string;
  teamResult: string;

  constructor(id: string, title: string, datetime: Date, description: string, game: string, enemyURL: string, enemyResult: string, teamResult: string) {
    this.id = id;
    this.title = title;
    this.datetime = datetime;
    this.description = description;
    this.game = game;
    this.enemyLogoURL = enemyURL
    this.enemyResult = enemyResult;
    this.teamResult = teamResult;
  }
}
