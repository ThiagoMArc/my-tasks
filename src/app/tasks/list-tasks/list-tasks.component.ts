import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/ITodo';
import { AppServiceService } from 'src/app/services/app-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DetailTaskComponent } from '../detail-task/detail-task.component';

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

  constructor(
    private service: AppServiceService,
    private router: Router,
    private dialog: MatDialog
  ) { }

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

  doFilter($event: any): string {
    let val = $event.target.value;
    return this.dataSource.filter = val.trim().toLocaleLowerCase();
  }

  openDetailsDialog(id: string) {
    this.dialog.open(DetailTaskComponent, {
      data: { id }
    });
  }

  setTaskCompletedColor(val: boolean): object {
    return val === true ? { 'color': 'green' } : { 'color': 'red' }
  }


  redirectToUpdate(id: string) {
    this.router.navigate([`/atualizar/${id}`]);
  }

  redirectToDelete(id: string) {

  }

}
