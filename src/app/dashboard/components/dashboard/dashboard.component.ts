import { Component, OnInit } from '@angular/core';
import { BoardsService } from 'src/app/core/services/boards/boards.service';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user = [
    {
      task: 14,
      name: 'Pikachu',
      progress: 'progress',
    },
    {
      task: 10,
      name: 'Eevee',
      progress: 'progress',
    },
    {
      task: 1,
      name: 'Snorlax',
      progress: 'progress',
    },
    {
      task: 20,
      name: 'Charmander',
      progress: 'progress',
    },
    {
      task: 4,
      name: 'Squirtle',
      progress: 'progress',
    },
  ];

  boards: any;

  constructor(
    private boardsService: BoardsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        const id = params.id;
      }
    );
    this.getBoardsUser();
  }

  getBoardsUser(): void {
    this.boardsService.getBoards().subscribe((data) => {
      this.boards = data.body;
      console.log(data.body);
    });
  }
}
