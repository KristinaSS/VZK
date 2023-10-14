import {Component, OnInit} from '@angular/core';
import {Article} from "../../../models/article/article";
import {NewsService} from "../../../services/news-service/news.service";

@Component({
  selector: 'app-news-box',
  templateUrl: './news-box.component.html',
  styleUrls: ['./news-box.component.css']
})
export class NewsBoxComponent implements OnInit {
  articles: Article[] = [];
  visibleArticles: number = 3;

  constructor(private newsService: NewsService) {
  }

  openArticle(article: any) {
    // Implement logic to open the entire article here
    console.log("Open article:", article);
  }

  showMore() {
  }

  ngOnInit(): void {
    this.articles = this.newsService.getMoreArticles();
  }
}
