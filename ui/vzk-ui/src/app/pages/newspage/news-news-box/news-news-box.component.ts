import {Component, OnInit} from '@angular/core';
import {Article} from '../../../models/article/article';
import {NewsService} from "../../../services/news-service/news.service";

@Component({
  selector: 'app-news-news-box',
  templateUrl: './news-news-box.component.html',
  styleUrls: ['./news-news-box.component.css']
})
export class NewsNewsBoxComponent implements OnInit {
  articles: Article[] = [];
  scrollDistance = 2;
  scrollUpDistance = 1;

  constructor(private newsService: NewsService) {
  }

  ngOnInit(): void {
    this.articles = this.newsService.getMoreArticles();
  }

  loadData() {
    console.log(this.articles.length)
    if(this.articles.length < 64){
      this.newsService.getMoreArticles();
    }
  }
}
