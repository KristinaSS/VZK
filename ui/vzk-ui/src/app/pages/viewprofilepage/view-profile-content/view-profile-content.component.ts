import {Component, Input} from '@angular/core';
import {Player} from "../../../models/player/player";

@Component({
  selector: 'app-view-profile-content',
  templateUrl: './view-profile-content.component.html',
  styleUrls: ['./view-profile-content.component.css']
})
export class ViewProfileContentComponent {
  @Input() account: Player | undefined;

  editProfile() {
    console.log("this account " + this.account?.name)
  }
}
