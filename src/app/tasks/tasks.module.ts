import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { CreateTaskComponent } from './create-task/create-task.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../shared/material.module';
import { DetailTaskComponent } from './detail-task/detail-task.component';

@NgModule({
  declarations: [
    ListTasksComponent,
    CreateTaskComponent,
    DetailTaskComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class TasksModule { }
