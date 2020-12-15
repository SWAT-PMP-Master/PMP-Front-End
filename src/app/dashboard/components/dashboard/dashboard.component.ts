import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { BoardsService } from 'src/app/core/services/boards/boards.service';

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
    private authService: AuthService,
    private boardsService: BoardsService
  ) {}

  ngOnInit(): void {
    this.login();
    this.getBoardsUser();
  }

  login(): void {
    this.authService.singIn().subscribe((data) => {
      localStorage.setItem('user', JSON.stringify(data));
    });
  }

  getBoardsUser(): void {
    this.boardsService.getBoards().subscribe((data) => {
      this.boards = data.body;
      console.log(data.body);
    });
  }
}
