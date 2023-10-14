import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NewsService} from "../../../services/news-service/news.service";
import {Article} from "../../../models/article/article";

@Component({
  selector: 'app-vie-article-page',
  templateUrl: './vie-article-page.component.html',
  styleUrls: ['./vie-article-page.component.css']
})
export class VieArticlePageComponent implements OnInit{
  article: Article | undefined;

  constructor(private route: ActivatedRoute, private newsService: NewsService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id != null) {
      console.log(id);
      this.article = this.newsService.getArticle(id);
      console.log(this.article);
    }
  }
}
