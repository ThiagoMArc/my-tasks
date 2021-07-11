import { Component, Inject, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/ITodo';
import { AppServiceService } from 'src/app/services/app-service.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

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
      error: err => console.log(err)
    })
  }


}
