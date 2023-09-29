import {Component, Input} from '@angular/core';
import {Article} from "../../models/article";

@Component({
    selector: 'app-news-box',
    templateUrl: './news-box.component.html',
    styleUrls: ['./news-box.component.css']
})
export class NewsBoxComponent {
    @Input() articles: Article[] = [];
    visibleArticles: number = 3;

    openArticle(article: any) {
        // Implement logic to open the entire article here
        console.log("Open article:", article);
    }

    showMore() {
        this.visibleArticles += 3;
    }
}
