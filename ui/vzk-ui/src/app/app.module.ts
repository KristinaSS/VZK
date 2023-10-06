import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeBoxComponent } from './pages/homepage/welcome-box/welcome-box.component';
import { HomeComponent } from './pages/homepage/home/home.component';
import { NavbarComponent } from './general/navbar/navbar.component';
import { LanguageBarComponent } from './general/language-bar/language-bar.component';
import { DynamicBackgroundComponent } from './general/dynamic-background/dynamic-background.component';
import {NewsBoxComponent} from "./pages/homepage/news-box/news-box.component";
import { TwitchBoxComponent } from './pages/homepage/twitch-box/twitch-box.component';
import { ScheduleBoxComponent } from './pages/homepage/schedule-box/schedule-box.component';
import { FooterComponent } from './general/footer/footer.component';
import { TeamPageComponent } from './pages/teamspage/team-page/team-page.component';
import { TopTeamsBannerComponent } from './pages/teamspage/top-teams-banner/top-teams-banner.component';
import { GameBoxComponent } from './pages/teamspage/game-box/game-box.component';
import { GameCardComponent } from './pages/teamspage/game-card/game-card.component';
import { TeamsBoxComponent } from './pages/teamspage/teams-box/teams-box.component';
import { PlayerBoxComponent } from './pages/teamspage/player-box/player-box.component';
import { PlayerCardComponent } from './pages/teamspage/player-card/player-card.component';

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
    PlayerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
