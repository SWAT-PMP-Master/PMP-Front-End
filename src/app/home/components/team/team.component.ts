import { Component, OnInit } from '@angular/core';

import { Developer } from '../team/team.model';

@Component({
  selector: 'app-our-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  developers: Developer[] = [
    {
      image: 'assets/images/juan-photo.jpg',
      name: 'Juan Camilo Guerrero',
      title: 'Project Manager',
      twitter: '@jCamiloG10',
      link: 'https://twitter.com/jCamiloG10'
    },
    {
      image: 'assets/images/camilo-photo.jpg',
      name: 'Camilo Andres Suarez',
      title: 'Frontend - UI/UX',
      twitter: '@RedKamo_',
      link: 'https://twitter.com/RedKamo_'
    },
    {
      image: 'assets/images/cesar-photo.jpg',
      name: 'Cesar Puentes',
      title: 'Frontend',
      twitter: '@cesarp04',
      link: 'https://twitter.com/cesarp04'
    },
    {
      image: 'assets/images/carlos-photo.png',
      name: 'Carlos Gutierrez',
      title: 'Backend',
      twitter: '@CarGDev',
      link: 'https://twitter.com/CarGDev'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
