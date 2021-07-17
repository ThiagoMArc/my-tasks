import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ICreateTodo } from 'src/app/models/ICreateTodo';
import { AppServiceService } from 'src/app/services/app-service.service';
import { SuccessDialogComponent } from 'src/app/shared/dialogs/success-dialog/success-dialog.component';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  taskForm!: FormGroup;
  private dialogConfig: any;

  constructor(private service: AppServiceService, private location: Location, private dialog: MatDialog) { }

  ngOnInit(): void {

    this.taskForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(60)])
    })

    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: {}
    }


  }

  hasError(controlName: string, errorName: string): boolean {
    return this.taskForm.controls[controlName].hasError(errorName);
  }

  onCancel(): void {
    this.location.back();
  }

  createTask(taskFormValue: any) {
    if (this.taskForm.valid)
      this.executeTaskCreation(taskFormValue)
  }

  private executeTaskCreation(taskFormValue: any): void {
    let createTask: ICreateTodo = {
      title: taskFormValue.title
    }

    this.service.create('todos', createTask).subscribe({
      next: () => {

        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

        dialogRef.afterClosed()
          .subscribe(() => {
            this.location.back();
          });
      },
      error: err => this.location.back()
    })
  }

}
