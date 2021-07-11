import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { CreateTaskComponent } from './create-task/create-task.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    ListTasksComponent,
    CreateTaskComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class TasksModule { }
