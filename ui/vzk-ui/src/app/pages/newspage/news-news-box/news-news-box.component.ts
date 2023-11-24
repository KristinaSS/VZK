import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../../models/article/article';
import {NewsService} from "../../../services/news-service/news.service";
import {Router} from "@angular/router";
import {Translation} from "../../../models/translation/translation";

@Component({
  selector: 'app-news-news-box',
  templateUrl: './news-news-box.component.html',
  styleUrls: ['./news-news-box.component.css']
})
export class NewsNewsBoxComponent implements OnInit {
  articles: Article[] = [];
  scrollDistance = 2;
  scrollUpDistance = 1;

  @Input() translationsAbout!: { [key: string]: Translation };

  constructor(private newsService: NewsService, private router: Router) {
  }

  ngOnInit(): void {
    this.articles = this.newsService.getMoreArticles();
  }

  loadData() {
    if (this.articles.length < 64) {
      this.newsService.getMoreArticles();
    }
  }

  openArticle(article: any) {
    this.router.navigate(['/news', article.id]).then(r => {
      window.scrollTo(0, 0);
    });
  }

  getTranslation(id: string) {
    return this.translationsAbout[id].content;
  }
}
