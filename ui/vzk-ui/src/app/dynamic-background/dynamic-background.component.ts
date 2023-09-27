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

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    // Get the current screen width and height
    this.screenWidth = this.document.documentElement.clientWidth;
    this.screenHeight = this.document.documentElement.clientHeight;
  }
}
