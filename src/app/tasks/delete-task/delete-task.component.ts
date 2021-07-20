import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteTaskComponent>,
  ) { }

  deleteItem(): void {
    this.dialogRef.close({ deleteEvent: true })
  }


}
