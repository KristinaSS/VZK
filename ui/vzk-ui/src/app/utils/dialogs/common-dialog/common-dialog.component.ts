import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-common-dialog',
  templateUrl: './common-dialog.component.html',
  styleUrls: ['./common-dialog.component.css']
})
export class CommonDialogComponent {
  @Inject(MAT_DIALOG_DATA) public data: { message: string };

  constructor(public dialogRef: MatDialogRef<CommonDialogComponent>, @Inject(MAT_DIALOG_DATA) data: {
    message: string
  }) {
    this.data = data;
  }

  onOkClick(): void {
    this.dialogRef.close();
  }
}
