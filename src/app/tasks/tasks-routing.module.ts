import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { DetailTaskComponent } from './detail-task/detail-task.component';

const routes: Routes = [
  { path: 'lista', component: ListTasksComponent },
  { path: 'detalhes/:id', component: DetailTaskComponent },
  { path: 'novo', component: CreateTaskComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TasksRoutingModule { }
