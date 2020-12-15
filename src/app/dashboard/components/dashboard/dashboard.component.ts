import { Component, OnInit } from '@angular/core';
import { BoardsService } from 'src/app/core/services/boards/boards.service';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  id: string;
  user: any;
  board: any;

  constructor(
    private boardsService: BoardsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.boardsService.getBoard(this.id).subscribe((boardInfo: any) => {
        this.board = boardInfo;
      });
      this.boardsService.getBoardMembers(this.id).subscribe((users: any) => {
        this.user = users;
      });
    });
  }
}
