export class Game {
  id: string;
  title: string;
  img: string;
  logo: string;

  constructor(id: string, title: string, img: string, logo: string) {
    this.id = id;
    this.title = title;
    this.img = img;
    this.logo = logo;
  }
}
