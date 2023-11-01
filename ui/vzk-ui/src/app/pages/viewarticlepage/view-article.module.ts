import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VieArticlePageComponent} from "./vie-article-page/vie-article-page.component";
import {VieArticlContentComponent} from "./vie-articl-content/vie-articl-content.component";


@NgModule({
  declarations: [
    VieArticlePageComponent,
    VieArticlContentComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ViewArticleModule {
}
