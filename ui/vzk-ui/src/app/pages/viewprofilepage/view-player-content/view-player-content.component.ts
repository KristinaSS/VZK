import {Component, Input} from '@angular/core';
import {Player} from "../../../models/player/player";
import {EditPlayerDialogComponent} from "../dialogs/edit-player-dialog/edit-player-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-view-player-content',
  templateUrl: './view-player-content.component.html',
  styleUrls: ['./view-player-content.component.css']
})
export class ViewPlayerContentComponent {
  @Input() account: Player | undefined;


  constructor(
    public dialog: MatDialog
  ) {
  }

  editPlayer() {
    const dialogRef = this.dialog.open(EditPlayerDialogComponent, {
      data: {acc: this.account},
      width: '300px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(() => {
      window.location.reload();
    });
  }

  formattedBirthday(): string | undefined {
    if (this.account?.birthday) {
      const [year, month, day] = this.account.birthday.split('-');
      const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];
      const monthWord = months[parseInt(month, 10) - 1];
      return `${monthWord} ${day}, ${year}`;
    }
    return undefined;
  }
}
