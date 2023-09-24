import { Component } from '@angular/core';
import {HomeComponent} from "./homepage/homepage/home/home.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent]
})
export class AppComponent {
  title = 'vzk-ui';
}
