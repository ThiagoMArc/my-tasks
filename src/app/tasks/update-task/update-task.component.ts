import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppServiceService } from 'src/app/services/app-service.service';
import { ToastrService } from 'ngx-toastr';
import { ITodo } from 'src/app/models/ITodo';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit, OnDestroy {

  taskForm!: FormGroup;
  subs!: Subscription;
  task!: ITodo;

  constructor(private service: AppServiceService,
    private location: Location,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.getTaskById();

    this.taskForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(60)])
    })
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  getTaskById(): any {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.subs = this.service.getData(`todos/${id}`).subscribe({
      next: res => this.task = res as ITodo,
      error: err => this.toastrService.error("Ocorreu um erro ao recuperar os dados da Tarefa")
    });

  }

  hasError(controlName: string, errorName: string): boolean {
    return this.taskForm.controls[controlName].hasError(errorName);
  }

  onCancel(): void {
    this.location.back();
  }

  editTask(taskFormValue: any) {
    if (this.taskForm.valid)
      this.executeTaskEdition(taskFormValue)
  }

  private executeTaskEdition(taskFormValue: any): void {

    let updateTask: ITodo = {
      id: this.task.id,
      userId: this.task.userId,
      title: taskFormValue.title,
      completed: this.task.completed
    }

    this.service.update(`todos/${this.task.id}`, updateTask).subscribe({
      next: () => {
        this.toastrService.success("Tarefa Atualizada com sucesso");
        this.location.back();
      },
      error: err => {
        this.toastrService.error("Ocorreu um erro ao tentar editar a tarefa");
        this.location.back()
      }
    })
  }

}
