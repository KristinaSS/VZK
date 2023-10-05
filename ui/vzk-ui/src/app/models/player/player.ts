export class Player {
  id: string;
  playerName: string;
  age: number;
  countryOrigin: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
  twitch?: string;
  role: string;
  img: string;


  constructor(id: string, playerName: string, age: number, countryOrigin: string, twitter: string, instagram: string, youtube: string, twitch: string, role: string, img: string) {
    this.id = id;
    this.playerName = playerName;
    this.age = age;
    this.countryOrigin = countryOrigin;
    this.twitter = twitter;
    this.instagram = instagram;
    this.youtube = youtube;
    this.twitch = twitch;
    this.role = role;
    this.img = img;
  }
}
