import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewProfilePageComponent} from "./view-profile-page/view-profile-page.component";
import { ViewProfileContentComponent } from './view-profile-content/view-profile-content.component';
import { ViewPlayerContentComponent } from './view-player-content/view-player-content.component';
import { ViewCasterContentComponent } from './view-caster-content/view-caster-content.component';
import { ViewCoachContentComponent } from './view-coach-content/view-coach-content.component';
import { ViewManagerContentComponent } from './view-manager-content/view-manager-content.component';
import { ViewAdminContentComponent } from './view-admin-content/view-admin-content.component';
import { ViewPartnerContentComponent } from './view-partner-content/view-partner-content.component';
import { ViewProfileBannerComponent } from './view-profile-banner/view-profile-banner.component';


@NgModule({
  declarations: [
    ViewProfilePageComponent,
    ViewProfileContentComponent,
    ViewPlayerContentComponent,
    ViewCasterContentComponent,
    ViewCoachContentComponent,
    ViewManagerContentComponent,
    ViewAdminContentComponent,
    ViewPartnerContentComponent,
    ViewProfileBannerComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ViewProfileModule {
}
