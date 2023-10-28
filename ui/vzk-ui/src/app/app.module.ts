import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WelcomeBoxComponent} from './pages/homepage/welcome-box/welcome-box.component';
import {HomeComponent} from './pages/homepage/home/home.component';
import {NavbarComponent} from './general/navbar/navbar.component';
import {LanguageBarComponent} from './general/language-bar/language-bar.component';
import {DynamicBackgroundComponent} from './general/dynamic-background/dynamic-background.component';
import {NewsBoxComponent} from "./pages/homepage/news-box/news-box.component";
import {TwitchBoxComponent} from './pages/homepage/twitch-box/twitch-box.component';
import {ScheduleBoxComponent} from './pages/homepage/schedule-box/schedule-box.component';
import {FooterComponent} from './general/footer/footer.component';
import {TeamPageComponent} from './pages/teamspage/team-page/team-page.component';
import {TopTeamsBannerComponent} from './pages/teamspage/top-teams-banner/top-teams-banner.component';
import {GameBoxComponent} from './pages/teamspage/game-box/game-box.component';
import {GameCardComponent} from './pages/teamspage/game-card/game-card.component';
import {TeamsBoxComponent} from './pages/teamspage/teams-box/teams-box.component';
import {PlayerBoxComponent} from './pages/teamspage/player-box/player-box.component';
import {PlayerCardComponent} from './pages/teamspage/player-card/player-card.component';
import {NewsPageComponent} from './pages/newspage/news-page/news-page.component';
import {TopNewsBannerComponent} from './pages/newspage/top-news-banner/top-news-banner.component';
import {NewsNewsBoxComponent} from './pages/newspage/news-news-box/news-news-box.component';
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
import {ContactPageComponent} from './pages/contactpage/contact-page/contact-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ContactHeaderComponent} from './pages/contactpage/contact-header/contact-header.component';
import {ContactFormComponent} from './pages/contactpage/contact-form/contact-form.component';
import {ContactDetailsComponent} from './pages/contactpage/contact-details/contact-details.component';
import {HttpClientModule} from "@angular/common/http";
import {CountryService} from "./services/country-service/country.service";
import { PrivacyPolicyPageComponent } from './pages/privacypolicypage/privacy-policy-page/privacy-policy-page.component';
import { PrivacyPolicyContentComponent } from './pages/privacypolicypage/privacy-policy-content/privacy-policy-content.component';
import { PrivacyPolicyBannerComponent } from './pages/privacypolicypage/privacy-policy-banner/privacy-policy-banner.component';
import { AboutPageComponent } from './pages/aboutpage/about-page/about-page.component';
import { AboutHeaderComponent } from './pages/aboutpage/about-header/about-header.component';
import { AboutContentComponent } from './pages/aboutpage/about-content/about-content.component';
import { AboutPartnersComponent } from './pages/aboutpage/about-partners/about-partners.component';
import { AboutInterstedComponent } from './pages/aboutpage/about-intersted/about-intersted.component';
import { AboutMissionComponent } from './pages/aboutpage/about-mission/about-mission.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeBoxComponent,
    HomeComponent,
    NavbarComponent,
    LanguageBarComponent,
    DynamicBackgroundComponent,
    NewsBoxComponent,
    TwitchBoxComponent,
    ScheduleBoxComponent,
    FooterComponent,
    TeamPageComponent,
    TopTeamsBannerComponent,
    GameBoxComponent,
    GameCardComponent,
    TeamsBoxComponent,
    PlayerBoxComponent,
    PlayerCardComponent,
    NewsPageComponent,
    TopNewsBannerComponent,
    NewsNewsBoxComponent,
    VieArticlePageComponent,
    VieArticlContentComponent,
    ScheduleResultPageComponent,
    SchedulePageComponent,
    ResultPageComponent,
    ScheculeResultHeaderComponent,
    ContactPageComponent,
    ContactHeaderComponent,
    ContactFormComponent,
    ContactDetailsComponent,
    PrivacyPolicyPageComponent,
    PrivacyPolicyContentComponent,
    PrivacyPolicyBannerComponent,
    AboutPageComponent,
    AboutHeaderComponent,
    AboutContentComponent,
    AboutPartnersComponent,
    AboutInterstedComponent,
    AboutMissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
