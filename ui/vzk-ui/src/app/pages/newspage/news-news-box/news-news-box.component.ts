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

  page = 0;
  isEndOfPage = false;

  @Input() translationsAbout!: { [key: string]: Translation };

  constructor(private newsService: NewsService, private router: Router) {
  }

  ngOnInit(): void {
    this.newsService.getMoreArticles(this.page).subscribe(
      (data) => {
        this.articles = data;
        if (data.length == 0) {
          this.isEndOfPage = true;
        }
        this.page++;
      },
      (error) => {
        console.error('Error fetching articles:', error);
      }
    );
  }

  loadData() {
    if (!this.isEndOfPage) {
      this.newsService.getMoreArticles(this.page).subscribe(
        (data) => {
          this.articles = [...this.articles, ...data];
          if (data.length == 0) {
            this.isEndOfPage = true;
          }
          this.page++;
        }
      );
    }
  }

  openArticle(article: any) {
    this.router.navigate(['/news', article.id]).then(() => {
      window.scrollTo(0, 0);
    });
  }

  getTranslation(id: string) {
    return this.translationsAbout[id].content;
  }
}
