import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactPageComponent} from "./contact-page/contact-page.component";
import {ContactHeaderComponent} from "./contact-header/contact-header.component";
import {ContactFormComponent} from "./contact-form/contact-form.component";
import {ContactDetailsComponent} from "./contact-details/contact-details.component";
import {CountryService} from "../../services/country-service/country.service";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../app-routing.module";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    ContactPageComponent,
    ContactHeaderComponent,
    ContactFormComponent,
    ContactDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    CommonModule
  ],
  providers: [CountryService],
})
export class ContactModule { }
