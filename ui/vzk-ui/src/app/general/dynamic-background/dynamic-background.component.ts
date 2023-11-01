import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-dynamic-background',
  templateUrl: './dynamic-background.component.html',
  styleUrls: ['./dynamic-background.component.css']
})
export class DynamicBackgroundComponent implements OnInit {
  screenWidth: number | undefined;
  screenHeight: number | undefined;

  constructor() {
  }

  ngOnInit() {
    this.screenWidth = (window.innerWidth / 3) * 2;
    this.screenHeight = (window.innerHeight / 3) * 2;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = (event.target.innerWidth / 3) * 2;
    this.screenHeight = (event.target.innerHeight / 3) * 2;
  }
}
