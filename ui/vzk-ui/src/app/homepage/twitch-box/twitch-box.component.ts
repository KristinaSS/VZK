import {AfterViewInit, Component} from '@angular/core';

declare var Twitch: any; // Add this declaration

@Component({
  selector: 'app-twitch-box',
  templateUrl: './twitch-box.component.html',
  styleUrls: ['./twitch-box.component.css']
})
export class TwitchBoxComponent implements AfterViewInit{
  ngAfterViewInit() {
    // Initialize the Twitch Embed Player
    new Twitch.Embed('twitch-embed', {
      width: 800,
      height: 450,
      channel: 'lolworldchampionship',
      layout: 'video',
    });
  }
}
