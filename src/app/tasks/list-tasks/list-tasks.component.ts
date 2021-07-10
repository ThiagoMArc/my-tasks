import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/ITodo';
import { AppServiceService } from 'src/app/services/app-service.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit, AfterViewInit, OnDestroy {

  displayedColumns = ['userId', 'id', 'title', 'completed', 'details', 'update', 'delete'];

  dataSource = new MatTableDataSource<ITodo>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  subs!: Subscription;

  constructor(private service: AppServiceService) { }

  ngOnInit(): void {
    this.getAllTasks();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  getAllTasks() {
    this.subs = this.service.getData('todos').subscribe({
      next: data => this.dataSource.data = data as ITodo[],
      error: err => console.log(err)
    });

  }

  public redirectToDetails = (id: string) => {

  }
  public redirectToUpdate = (id: string) => {

  }
  public redirectToDelete = (id: string) => {

  }

}
