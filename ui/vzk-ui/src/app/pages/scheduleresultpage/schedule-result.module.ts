import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScheduleResultPageComponent} from "./schecule-result-page/schedule-result-page.component";
import {SchedulePageComponent} from "./schecule-page/schedule-page.component";
import {ResultPageComponent} from "./result-page/result-page.component";
import {ScheculeResultHeaderComponent} from "./schecule-result-header/schecule-result-header.component";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ScheduleResultPageComponent,
    SchedulePageComponent,
    ResultPageComponent,
    ScheculeResultHeaderComponent,
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    MatInputModule,
    FormsModule,
  ]
})
export class ScheduleResultModule { }
