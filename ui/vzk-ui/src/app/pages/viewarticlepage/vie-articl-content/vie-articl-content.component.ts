import {Component, Input, OnInit} from '@angular/core';
import { Article } from "../../../models/article/article";
import { NewsService } from "../../../services/news-service/news.service";
import { ActivatedRoute } from "@angular/router";
import {Translation} from "../../../models/translation/translation";

@Component({
  selector: 'app-vie-articl-content',
  templateUrl: './vie-articl-content.component.html',
  styleUrls: ['./vie-articl-content.component.css']
})
export class VieArticlContentComponent implements OnInit {
  id!: string | null;
  article: Article | undefined;

  @Input() translationsAbout!: { [key: string]: Translation };

  getTranslation(id: string) {
    return this.translationsAbout[id].content;
  }

  constructor(private newsService: NewsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id != null) {
      this.newsService.getArticle(this.id).subscribe(
        (result) => {
          this.article = result;
        },
        error => {
          console.error('Error fetching article:', error);
        }
      );
    }
  }

  shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    this.openShareWindow(facebookShareUrl);
  }

  shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    // @ts-ignore
    const text = encodeURIComponent(this.article.title);
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    this.openShareWindow(twitterShareUrl);
  }

  shareOnReddit() {
    const url = encodeURIComponent(window.location.href);
    // @ts-ignore
    const title = encodeURIComponent(this.article.title);
    const redditShareUrl = `https://www.reddit.com/submit?url=${url}&title=${title}`;
    this.openShareWindow(redditShareUrl);
  }

  private openShareWindow(url: string) {
    window.open(url, '_blank', 'width=600,height=400');
  }
}
