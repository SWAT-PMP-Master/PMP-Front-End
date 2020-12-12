import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var Trello;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  successLogin(): void {
    this.router.navigate(['/dashboard/dashboard']);
  }

  loginTrello(): void {
    Trello.authorize({
      type: 'popup',
      name: 'Getting Started Application',
      scope: {
        read: 'true',
        write: 'true',
      },
      expiration: 'never',
      success: this.successLogin(),
      error: console.log('Failed authentication'),
    });
  }
}
