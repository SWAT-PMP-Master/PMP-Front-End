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
  statistics: any;

  single = [
    {
      name: 'Germany',
      value: 8940000,
    },
    {
      name: 'USA',
      value: 5000000,
    },
    {
      name: 'France',
      value: 7200000,
    },
    {
      name: 'UK',
      value: 6200000,
    },
  ];
  view: any[] = [700, 400];
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };
  gradient = true;
  showLegend = true;
  showLabels = true;
  isDoughnut = false;

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
      this.boardsService
        .getStatisticsBoard(this.id)
        .subscribe((statistic: any) => {
          this.statistics = statistic.body;
          console.log(this.statistics);
        });
    });
  }
}
