import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrivacyPolicyPageComponent} from "./privacy-policy-page/privacy-policy-page.component";
import {PrivacyPolicyContentComponent} from "./privacy-policy-content/privacy-policy-content.component";
import {PrivacyPolicyBannerComponent} from "./privacy-policy-banner/privacy-policy-banner.component";



@NgModule({
  declarations: [
    PrivacyPolicyPageComponent,
    PrivacyPolicyContentComponent,
    PrivacyPolicyBannerComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PrivacyPolicyModule { }
