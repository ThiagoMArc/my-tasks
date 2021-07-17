import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { CreateTaskComponent } from './create-task/create-task.component';
import { SharedModule } from '../shared/shared.module';
import { DetailTaskComponent } from './detail-task/detail-task.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListTasksComponent,
    CreateTaskComponent,
    DetailTaskComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class TasksModule { }
