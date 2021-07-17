import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICreateTodo } from 'src/app/models/ICreateTodo';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  taskForm!: FormGroup;


  constructor(private service: AppServiceService,
    private location: Location,
    private toastrService: ToastrService) { }

  ngOnInit(): void {

    this.taskForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(60)])
    })

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
        this.toastrService.success("Tarefa criada com sucesso");
        this.location.back();
      },
      error: err => {
        this.toastrService.error("Ocorreu um erro ao tentar criar a tarefa");
        this.location.back()
      }
    })
  }

}
