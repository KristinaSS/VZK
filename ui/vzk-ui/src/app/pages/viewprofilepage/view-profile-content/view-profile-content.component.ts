import {Component, Input} from '@angular/core';
import {Player} from "../../../models/player/player";
import {MatDialog} from "@angular/material/dialog";
import {EditAccountDialogComponent} from "../dialogs/edit-account-dialog/edit-account-dialog.component";

@Component({
  selector: 'app-view-profile-content',
  templateUrl: './view-profile-content.component.html',
  styleUrls: ['./view-profile-content.component.css']
})
export class ViewProfileContentComponent {
  @Input() account: Player | undefined;

  constructor(
    public dialog: MatDialog
  ) {
  }

  editProfile() {
    const dialogRef = this.dialog.open(EditAccountDialogComponent, {
      data: {acc: this.account},
      width: '300px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(() => {
      window.location.reload();
    });
  }
}
