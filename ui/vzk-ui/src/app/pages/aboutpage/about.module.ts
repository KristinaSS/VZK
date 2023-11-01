import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutPageComponent} from "./about-page/about-page.component";
import {AboutContentComponent} from "./about-content/about-content.component";
import {AboutHeaderComponent} from "./about-header/about-header.component";
import {AboutInterestedComponent} from "./about-intersted/about-interested.component";
import {AboutMissionComponent} from "./about-mission/about-mission.component";
import {AboutPartnersComponent} from "./about-partners/about-partners.component";


@NgModule({
  declarations: [
    AboutPageComponent,
    AboutHeaderComponent,
    AboutContentComponent,
    AboutPartnersComponent,
    AboutInterestedComponent,
    AboutMissionComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class AboutModule {
}
