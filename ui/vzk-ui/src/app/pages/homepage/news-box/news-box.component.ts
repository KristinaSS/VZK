import {Component, OnInit} from '@angular/core';
import {Article} from "../../../models/article/article";
import {NewsService} from "../../../services/news-service/news.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-news-box',
  templateUrl: './news-box.component.html',
  styleUrls: ['./news-box.component.css']
})
export class NewsBoxComponent implements OnInit {
  articles: Article[] = [];
  visibleArticles: number = 3;

  constructor(private newsService: NewsService, private router: Router) {
  }

  openArticle(article: any) {
    console.log("Open article:", article);
    this.router.navigate(['/news', article.id]).then(r => {
      window.scrollTo(0, 0);
    });
  }

  showMore() {
    this.router.navigate(['/news']).then(r => {
      window.scrollTo(0, 0);
    });
  }

  ngOnInit(): void {
    this.articles = this.newsService.getMoreArticles();
  }
}
