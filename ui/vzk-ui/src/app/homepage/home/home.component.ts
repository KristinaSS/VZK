import {Component, OnInit} from '@angular/core';
import {Article} from "../../models/article";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newsArticles: Article[] = []; // Initialize as an empty array of Article objects

  ngOnInit() {
    // You can add articles to the array like this:
    const article1 = new Article('1', '2023-09-27', 'Description 1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT62AjFzFCrwzQhGKOKZglZG3hjgQ9nYaCiwg&usqp=CAU', 'Very long title 1 Very long title 1 Very long title 1 Very long title 1 ');
    const article2 = new Article('2', '2023-09-28', 'Description 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT62AjFzFCrwzQhGKOKZglZG3hjgQ9nYaCiwg&usqp=CAU', 'Title 2');
    const article3 = new Article('3', '2023-09-29', 'Description 3', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT62AjFzFCrwzQhGKOKZglZG3hjgQ9nYaCiwg&usqp=CAU', 'Title 3');
    const article4 = new Article('4', '2023-09-30', 'Description 4', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT62AjFzFCrwzQhGKOKZglZG3hjgQ9nYaCiwg&usqp=CAU', 'Title 4');

    // Push the articles into the newsArticles array
    this.newsArticles.push(article1, article2, article3, article4);
  }
}
