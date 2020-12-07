import { Component, OnInit } from '@angular/core';

import { Icon } from '../description-section/description-section.model';

@Component({
  selector: 'app-description-section',
  templateUrl: './description-section.component.html',
  styleUrls: ['./description-section.component.scss']
})
export class DescriptionSectionComponent implements OnInit {

  icons: Icon[] = [
    {
      image: 'assets/images/icon-1.png',
      description: 'View the progress of tasks for each team member.'
    },
    {
      image: 'assets/images/icon-2.png',
      description: 'Check your team`s performance.'
    },
    {
      image: 'assets/images/icon-3.png',
      description: 'All the information of your team in trello with only the board id.'
    },
    {
      image: 'assets/images/icon-4.png',
      description: 'The progress of the project in real time with graphics.'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
