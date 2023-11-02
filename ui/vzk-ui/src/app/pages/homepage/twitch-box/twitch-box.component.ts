import {AfterViewInit, Component, Input} from '@angular/core';
import {Translation} from "../../../models/translation/translation";

declare var Twitch: any;

@Component({
  selector: 'app-twitch-box',
  templateUrl: './twitch-box.component.html',
  styleUrls: ['./twitch-box.component.css']
})
export class TwitchBoxComponent implements AfterViewInit{
  channelId = 'riotgames';
  format= 'video';

  @Input() translationsAbout!: { [key: string]: Translation };

  getTranslation(id: string) {
    return this.translationsAbout[id].content;
  }

  ngAfterViewInit() {
    // Initialize the Twitch Embed Player
    new Twitch.Embed('twitch-embed-L', {
      width: 800,
      height: 450,
      channel: this.channelId,
      layout: this.format,
    });

    new Twitch.Embed('twitch-embed-M', {
      width: 600,
      height: 337,
      channel: this.channelId,
      layout: this.format,
    });

    new Twitch.Embed('twitch-embed-S', {
      width: 400,
      height: 225,
      channel: this.channelId,
      layout: this.format,
    });

    new Twitch.Embed('twitch-embed-XS', {
      width: 300,
      height: 169,
      channel: this.channelId,
      layout: this.format,
    });
  }
}
