import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/ITodo';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-detail-task',
  templateUrl: './detail-task.component.html',
  styleUrls: ['./detail-task.component.css']
})
export class DetailTaskComponent implements OnInit {

  task!: ITodo;
  subs!: Subscription;

  constructor(private service: AppServiceService,
    private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTaskDetail();
  }

  getTaskDetail() {
    let id: string = this.activeRoute.snapshot.params['id'];
    this.service.getData(`todos/${id}`).subscribe({
      next: data => this.task = data as ITodo,
      error: err => console.log(err)
    })
  }

  onBack(): void {
    this.router.navigate(['tarefas/lista']);
  }

}
