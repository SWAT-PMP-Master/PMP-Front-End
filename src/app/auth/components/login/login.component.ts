import { core } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

declare var Trello;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  loginTrello(): void {
    Trello.authorize({
      type: 'popup',
      name: 'Getting Started Application',
      scope: {
        read: 'true',
        write: 'true',
      },
      expiration: 'never',
      success: console.log('Successful authentication'),
      error: console.log('Failed authentication'),
    });
  }
}
