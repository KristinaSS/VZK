import {Component, Input} from '@angular/core';
import {Article} from "../../../models/article/article";

@Component({
  selector: 'app-news-news-box',
  templateUrl: './news-news-box.component.html',
  styleUrls: ['./news-news-box.component.css']
})
export class NewsNewsBoxComponent {
  @Input() articles: Article[] = [];
}
