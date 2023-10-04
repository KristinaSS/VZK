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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
