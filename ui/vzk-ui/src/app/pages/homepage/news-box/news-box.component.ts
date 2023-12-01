import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../../models/article/article";
import {NewsService} from "../../../services/news-service/news.service";
import {Router} from "@angular/router";
import {Translation} from "../../../models/translation/translation";

@Component({
  selector: 'app-news-box',
  templateUrl: './news-box.component.html',
  styleUrls: ['./news-box.component.css']
})
export class NewsBoxComponent implements OnInit {
  articles: Article[] = [];
  visibleArticles: number = 3;

  @Input() translationsAbout!: { [key: string]: Translation };

  constructor(private newsService: NewsService, private router: Router) {
  }

  openArticle(article: any) {
    this.router.navigate(['/news', article.id]).then(() => {
      window.scrollTo(0, 0);
    });
  }

  showMore() {
    this.router.navigate(['/news']).then(() => {
      window.scrollTo(0, 0);
    });
  }

  ngOnInit(): void {
    this.newsService.getMoreArticles(0).subscribe(
      (data) => {
        this.articles = data;
      },
      (error) => {
        console.error('Error fetching articles:', error);
      }
    );
  }

  getTranslation(id: string) {
    return this.translationsAbout[id].content;
  }
}
