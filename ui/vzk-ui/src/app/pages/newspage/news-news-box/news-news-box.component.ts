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
  articles: Article[] | undefined = [];
  filteredArticles: Article [] = [];


  scrollDistance = 2;
  scrollUpDistance = 1;
  isLoading: boolean = false;

  search: String = "";
  isFiltered = false;

  page = 0;
  isEndOfPage = false;

  @Input() translationsAbout!: { [key: string]: Translation };

  constructor(private newsService: NewsService, private router: Router) {
  }

  // @ts-ignore
  private ngOnInitPromise: Promise<void>;
  // @ts-ignore
  private ngOnInitResolve: () => void;

  async ngOnInit() {
    if (!this.ngOnInitPromise) {
      this.ngOnInitPromise = new Promise<void>((resolve) => {
        this.ngOnInitResolve = resolve;
      });
    }

    try {
      this.isLoading = true;
      this.articles = await (await this.newsService.getMoreArticles(this.page)).toPromise();

      if (this.articles?.length === 0) {
        this.isEndOfPage = true;
      }

      this.page++;
      this.isLoading = false;
      this.ngOnInitResolve(); // Resolve the promise to signal that ngOnInit has completed
    } catch (error) {
      console.error('Error fetching articles:', error);
      this.isLoading = false;
    }
  }

  async loadData() {
    // Ensure that ngOnInit has completed before proceeding
    await this.ngOnInitPromise;

    try {
      this.isLoading = true;
      let data = await (await this.newsService.getMoreArticles(this.page)).toPromise();

      // @ts-ignore
      this.articles = [...this.articles, ...data];

      if (data?.length === 0) {
        this.isEndOfPage = true;
      }

      this.page++;
      this.isLoading = false;
    } catch (error) {
      console.error('Error fetching articles:', error);
      this.isLoading = false;
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

  onInputChange(event: any): void {
    const inputValue = event.target.value;

    if (inputValue.length >= 2) {
      this.filterItems();
      this.isFiltered = true;
    }else {
      this.isFiltered = false;
    }
  }

  private filterItems() {
    this.newsService.getFilteredArticles(this.search).subscribe(
      (data) => {
        // @ts-ignore
        this.filteredArticles = data;
      },
      (error) => {
        console.error('Error fetching articles:', error);
      }
    )
  }
}
