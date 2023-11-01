import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './general/navbar/navbar.component';
import {LanguageBarComponent} from './general/language-bar/language-bar.component';
import {DynamicBackgroundComponent} from './general/dynamic-background/dynamic-background.component';
import {FooterComponent} from './general/footer/footer.component';
import {TeamPageComponent} from './pages/teamspage/team-page/team-page.component';
import {TopTeamsBannerComponent} from './pages/teamspage/top-teams-banner/top-teams-banner.component';
import {GameBoxComponent} from './pages/teamspage/game-box/game-box.component';
import {GameCardComponent} from './pages/teamspage/game-card/game-card.component';
import {TeamsBoxComponent} from './pages/teamspage/teams-box/teams-box.component';
import {PlayerBoxComponent} from './pages/teamspage/player-box/player-box.component';
import {PlayerCardComponent} from './pages/teamspage/player-card/player-card.component';
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {VieArticlePageComponent} from './pages/viewarticlepage/vie-article-page/vie-article-page.component';
import {VieArticlContentComponent} from './pages/viewarticlepage/vie-articl-content/vie-articl-content.component';
import {
  ScheduleResultPageComponent
} from './pages/scheduleresultpage/schecule-result-page/schedule-result-page.component';
import {SchedulePageComponent} from './pages/scheduleresultpage/schecule-page/schedule-page.component';
import {ResultPageComponent} from './pages/scheduleresultpage/result-page/result-page.component';
import {
  ScheculeResultHeaderComponent
} from './pages/scheduleresultpage/schecule-result-header/schecule-result-header.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CountryService} from "./services/country-service/country.service";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TermsPageComponent} from './pages/termspage/terms-page/terms-page.component';
import {TermsHeaderComponent} from './pages/termspage/terms-header/terms-header.component';
import {TermsContentComponent} from './pages/termspage/terms-content/terms-content.component';
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
