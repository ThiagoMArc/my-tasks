import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/ITodo';
import { AppServiceService } from 'src/app/services/app-service.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-task',
  templateUrl: './detail-task.component.html',
  styleUrls: ['./detail-task.component.css']
})
export class DetailTaskComponent implements OnInit, OnDestroy {

  private id: string = '';
  task!: ITodo;
  subs!: Subscription;

  constructor(
    private service: AppServiceService,
    private toastrService: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.id = data.id;
  }

  ngOnInit(): void {
    this.getTaskDetail();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  getTaskDetail() {
    this.subs = this.service.getData(`todos/${this.id}`).subscribe({
      next: data => this.task = data as ITodo,
      error: err => this.toastrService.error("Ocorreu um erro ao recuperar os dados da tarefa")
    })
  }


}
