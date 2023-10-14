import { Component, OnInit } from '@angular/core';
import { Article } from "../../../models/article/article";
import { NewsService } from "../../../services/news-service/news.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-vie-articl-content',
  templateUrl: './vie-articl-content.component.html',
  styleUrls: ['./vie-articl-content.component.css']
})
export class VieArticlContentComponent implements OnInit {
  id!: string | null;
  article: Article | undefined;

  constructor(private newsService: NewsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id != null) {
      console.log(this.id);

      this.newsService.getArticle(this.id).subscribe(
        (result: Article | undefined) => {
          this.article = result;
          console.log(this.article);
        },
        error => {
          console.error('Error fetching article:', error);
        }
      );
    }
  }
}
