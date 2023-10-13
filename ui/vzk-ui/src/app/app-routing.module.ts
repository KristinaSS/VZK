import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/homepage/home/home.component";
import {TeamPageComponent} from "./pages/teamspage/team-page/team-page.component";
import {NewsPageComponent} from "./pages/newspage/news-page/news-page.component";

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
