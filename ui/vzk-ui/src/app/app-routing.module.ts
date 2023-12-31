import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/homepage/home/home.component";
import {TeamPageComponent} from "./pages/teamspage/team-page/team-page.component";
import {NewsPageComponent} from "./pages/newspage/news-page/news-page.component";
import {VieArticlePageComponent} from "./pages/viewarticlepage/vie-article-page/vie-article-page.component";
import {
  ScheduleResultPageComponent
} from "./pages/scheduleresultpage/schecule-result-page/schedule-result-page.component";
import {ContactPageComponent} from "./pages/contactpage/contact-page/contact-page.component";
import {PrivacyPolicyPageComponent} from "./pages/privacypolicypage/privacy-policy-page/privacy-policy-page.component";
import {AboutPageComponent} from "./pages/aboutpage/about-page/about-page.component";
import {TermsPageComponent} from "./pages/termspage/terms-page/terms-page.component";
import {VerifyPageComponent} from "./pages/verify-page/verify-page.component";
import {ViewProfilePageComponent} from "./pages/viewprofilepage/view-profile-page/view-profile-page.component";
import {AdminPanelPageComponent} from "./pages/panels/admin-panel-page/admin-panel-page/admin-panel-page.component";
import {CasterPanelPageComponent} from "./pages/panels/caster-panel-page/caster-panel-page/caster-panel-page.component";
import {CoachPanelPageComponent} from "./pages/panels/coach-panel-page/coach-panel-page/coach-panel-page.component";
import {
  ManagerPanelPageComponent
} from "./pages/panels/manager-panel-page/manager-panel-page/manager-panel-page.component";
import {
  PartnerPanelPageComponent
} from "./pages/panels/partner-panel-page/partner-panel-page/partner-panel-page.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'teams',
    component: TeamPageComponent
  },
  {
    path: 'news',
    component: NewsPageComponent
  },
  {
    path: 'news/:id',
    component: VieArticlePageComponent
  },
  {
    path: 'schedule',
    component: ScheduleResultPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyPageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'terms',
    component: TermsPageComponent
  },
  {
    path: 'verify/:email/:vToken',
    component: VerifyPageComponent
  },
  {
    path: 'profile',
    component: ViewProfilePageComponent
  },
  {
    path: 'admin',
    component: AdminPanelPageComponent
  },
  {
    path: 'caster',
    component: CasterPanelPageComponent
  },
  {
    path: 'coach',
    component: CoachPanelPageComponent
  },
  {
    path: 'manager',
    component: ManagerPanelPageComponent
  },
  {
    path: 'partner',
    component: PartnerPanelPageComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
