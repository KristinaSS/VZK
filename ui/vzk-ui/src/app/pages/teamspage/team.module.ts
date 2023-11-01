import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeamPageComponent} from "./team-page/team-page.component";
import {TopTeamsBannerComponent} from "./top-teams-banner/top-teams-banner.component";
import {GameBoxComponent} from "./game-box/game-box.component";
import {GameCardComponent} from "./game-card/game-card.component";
import {TeamsBoxComponent} from "./teams-box/teams-box.component";
import {PlayerBoxComponent} from "./player-box/player-box.component";
import {PlayerCardComponent} from "./player-card/player-card.component";


@NgModule({
  declarations: [
    TeamPageComponent,
    TopTeamsBannerComponent,
    GameBoxComponent,
    GameCardComponent,
    TeamsBoxComponent,
    PlayerBoxComponent,
    PlayerCardComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class TeamModule {
}
