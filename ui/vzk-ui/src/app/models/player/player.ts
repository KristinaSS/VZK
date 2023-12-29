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
  team: string;
  gender: string;
  game: string;


  constructor(id: string, name: string, email: string, username: string, playerName: string, birthday: string, age: number, countryOrigin: string, twitter: string, instagram: string, youtube: string, twitch: string, role: string, image: string, team: string, gender: string, game: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.username = username;
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
    this.team = team;
    this.gender = gender;
    this.game = game;
  }
}
