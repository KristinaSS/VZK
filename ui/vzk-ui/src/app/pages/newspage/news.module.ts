import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsPageComponent} from "./news-page/news-page.component";
import {TopNewsBannerComponent} from "./top-news-banner/top-news-banner.component";
import {NewsNewsBoxComponent} from "./news-news-box/news-news-box.component";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    NewsPageComponent,
    TopNewsBannerComponent,
    NewsNewsBoxComponent,
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    MDBBootstrapModule.forRoot(),
  ]
})
export class NewsModule {
}
