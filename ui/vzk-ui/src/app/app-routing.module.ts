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
