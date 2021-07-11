import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CreateTaskComponent } from './create-task/create-task.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  { path: 'list', component: ListTasksComponent },
  { path: 'create', component: CreateTaskComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatInputModule]
})
export class TasksRoutingModule { }
