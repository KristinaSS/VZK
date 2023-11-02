import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './general/navbar/navbar.component';
import {LanguageBarComponent} from './general/language-bar/language-bar.component';
import {DynamicBackgroundComponent} from './general/dynamic-background/dynamic-background.component';
import {FooterComponent} from './general/footer/footer.component';
import {AboutModule} from "./pages/aboutpage/about.module";
import {ContactModule} from "./pages/contactpage/contact.module";
import {HomepageModule} from "./pages/homepage/homepage.module";
import {NewsModule} from "./pages/newspage/news.module";
import {PrivacyPolicyModule} from "./pages/privacypolicypage/privacy-policy.module";
import {ScheduleResultModule} from "./pages/scheduleresultpage/schedule-result.module";
import {TeamModule} from "./pages/teamspage/team.module";
import {TermsModule} from "./pages/termspage/terms.module";
import {ViewArticleModule} from "./pages/viewarticlepage/view-article.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LanguageBarComponent,
    DynamicBackgroundComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    ContactModule,
    HomepageModule,
    NewsModule,
    PrivacyPolicyModule,
    ScheduleResultModule,
    TeamModule,
    TermsModule,
    ViewArticleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
