import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TermsPageComponent} from "./terms-page/terms-page.component";
import {TermsHeaderComponent} from "./terms-header/terms-header.component";
import {TermsContentComponent} from "./terms-content/terms-content.component";


@NgModule({
  declarations: [
    TermsPageComponent,
    TermsHeaderComponent,
    TermsContentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TermsModule {
}
