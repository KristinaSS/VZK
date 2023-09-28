export class Article {
  id: string;
  date: string;
  description: string;
  image: string;
  title: string;

  constructor(id: string, date: string, description: string, image: string, title: string) {
    this.id = id;
    this.date = date;
    this.description = description;
    this.image = image;
    this.title = title;
  }
}
