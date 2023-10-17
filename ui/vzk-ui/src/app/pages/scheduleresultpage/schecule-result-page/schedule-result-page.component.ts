import {Component} from '@angular/core';

@Component({
  selector: 'app-schecule-result-page',
  templateUrl: './schedule-result-page.component.html',
  styleUrls: ['./schedule-result-page.component.css']
})
export class ScheduleResultPageComponent {
  currentContent: number = 1;
  button1Disabled: boolean = true;
  button2Disabled: boolean = false;

  constructor() {
  }

  showContent(contentNumber: number): void {
    if (contentNumber === 1) {
      this.currentContent = 1;
      this.button1Disabled = true;
      this.button2Disabled = false;
    } else if (contentNumber === 2) {
      this.currentContent = 2;
      this.button1Disabled = false;
      this.button2Disabled = true;
    }
  }
}
