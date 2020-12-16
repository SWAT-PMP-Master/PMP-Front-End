import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/core/services/auth/auth.service';
import { BoardsService } from './../../../core/services/boards/boards.service';
import { LoginResponse } from './../../../models/login.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userInfo = false;

  boards: any;

  user: LoginResponse;
  constructor(
    private authService: AuthService,
    private boardsService: BoardsService
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('trello_token');
    if (token) {
      this.login();
    }
    this.getUserInfo();
  }

  login(): void {
    this.authService.singIn().subscribe((data) => {
      localStorage.setItem('user', JSON.stringify(data));
    });
  }

  getUserInfo(): void {
    setTimeout(() => {
      const info: string = localStorage.getItem('user');
      const data = JSON.parse(info);
      if (data) {
        this.user = data;
        this.getBoardsUser();
      }
      return (this.userInfo = true);
    }, 1000);
  }

  getBoardsUser(): void {
    this.boardsService.getBoards().subscribe((data) => {
      this.boards = data.body;
    });
  }
}
