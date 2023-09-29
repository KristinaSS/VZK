import {Component} from '@angular/core';

@Component({
    selector: 'app-dynamic-background',
    templateUrl: './dynamic-background.component.html',
    styleUrls: ['./dynamic-background.component.css']
})
export class DynamicBackgroundComponent {
    screenWidth: number | undefined;
    screenHeight: number | undefined;

    constructor() {
    }

    ngOnInit() {
        // Get the current screen width and height
        this.screenWidth = (window.innerWidth / 3) * 2;
        this.screenHeight = (window.innerHeight / 3) * 2;
    }
}
