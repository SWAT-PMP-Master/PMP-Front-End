import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { LoginResponse } from './../../../models/login.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
      user: LoginResponse;
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    const info: string = localStorage.getItem('user');
    const data = JSON.parse(info);
    if (data){
      this.user = data;
    }
  }

  LogOut(): void{
    localStorage.clear();
  }
}
