export class Player {
  id: string;
  name?: string;
  email?: string;
  username?: string;
  playerName: string;
  birthday: string;
  age?: number;
  countryOrigin: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
  twitch?: string;
  role: string;
  image: string;

  constructor(id: string, playerName: string, birthday: string, age: number, countryOrigin: string, twitter: string, instagram: string, youtube: string, twitch: string, role: string, image: string) {
    this.id = id;
    this.playerName = playerName;
    this.birthday = birthday;
    this.age = age;
    this.countryOrigin = countryOrigin;
    this.twitter = twitter;
    this.instagram = instagram;
    this.youtube = youtube;
    this.twitch = twitch;
    this.role = role;
    this.image = image;
  }
}
