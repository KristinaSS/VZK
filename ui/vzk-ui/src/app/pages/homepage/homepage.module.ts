import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WelcomeBoxComponent} from "./welcome-box/welcome-box.component";
import {HomeComponent} from "./home/home.component";
import {NewsBoxComponent} from "./news-box/news-box.component";
import {TwitchBoxComponent} from "./twitch-box/twitch-box.component";
import {ScheduleBoxComponent} from "./schedule-box/schedule-box.component";


@NgModule({
  declarations: [
    HomeComponent,
    WelcomeBoxComponent,
    NewsBoxComponent,
    TwitchBoxComponent,
    ScheduleBoxComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HomepageModule {
}
