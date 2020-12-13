import { Component, OnInit } from '@angular/core';

import { LoginResponse } from './../../../models/login.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: LoginResponse;
  constructor() { }

  ngOnInit(): void {
    const info: string = localStorage.getItem('user');
    const data = JSON.parse(info);
    if (data){
      this.user = data;
    }
  }

}
