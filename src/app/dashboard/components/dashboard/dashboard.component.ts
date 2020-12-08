import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user = [
    {
      task: 14,
      name: 'Pikachu',
      progress: 'progress'
    },
    {
      task: 10,
      name: 'Eevee',
      progress: 'progress'
    },
    {
      task: 1,
      name: 'Snorlax',
      progress: 'progress'
    },
    {
      task: 20,
      name: 'Charmander',
      progress: 'progress'
    },
    {
      task: 4,
      name: 'Squirtle',
      progress: 'progress'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
