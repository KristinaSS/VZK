import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  screenWidth: number | undefined;
  screenHeight: number | undefined;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    // Get the current screen width and height
    this.screenWidth = this.document.documentElement.clientWidth;
    this.screenHeight = this.document.documentElement.clientHeight;
  }
}
