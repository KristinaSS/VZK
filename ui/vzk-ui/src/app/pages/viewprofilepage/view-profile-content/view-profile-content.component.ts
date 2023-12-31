import {Component, Input} from '@angular/core';
import {Player} from "../../../models/player/player";
import {CommonDialogComponent} from "../../../utils/dialogs/common-dialog/common-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {EditAccountDialogComponent} from "../edit-account-dialog/edit-account-dialog.component";

@Component({
  selector: 'app-view-profile-content',
  templateUrl: './view-profile-content.component.html',
  styleUrls: ['./view-profile-content.component.css']
})
export class ViewProfileContentComponent {
  @Input() account: Player | undefined;

  constructor(
    public dialog: MatDialog
  ) {}

  editProfile() {
    this.dialog.open(EditAccountDialogComponent, {
      data: { acc: this.account },
      width: '300px'
    });
  }
}
