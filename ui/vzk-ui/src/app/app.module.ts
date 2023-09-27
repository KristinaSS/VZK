import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeBoxComponent } from './homepage/welcome-box/welcome-box.component';
import { HomeComponent } from './homepage/home/home.component';
import { NavbarComponent } from './general/navbar/navbar.component';
import { LanguageBarComponent } from './general/language-bar/language-bar.component';
import { DynamicBackgroundComponent } from './general/dynamic-background/dynamic-background.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeBoxComponent,
    HomeComponent,
    NavbarComponent,
    LanguageBarComponent,
    DynamicBackgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
