import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  title = 'Tasks';

  constructor() { }

  ngOnInit(): void {
  }

}
