import {Component, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-dynamic-background',
  templateUrl: './dynamic-background.component.html',
  styleUrls: ['./dynamic-background.component.css']
})
export class DynamicBackgroundComponent {
  screenWidth: number | undefined;
  screenHeight: number | undefined;

  constructor() {}

  ngOnInit() {
    // Get the current screen width and height
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }
}
