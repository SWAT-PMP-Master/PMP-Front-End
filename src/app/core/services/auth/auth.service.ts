import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // tslint:disable-next-line:typedef
  singIn() {
    return this.http.get(
      `${environment.URL_API}auth/sign-in/${localStorage.getItem(
        'trello_token'
      )}`
    );
    // .pipe(
    //   tap((data) => {
    //     localStorage.setItem('user', JSON.stringify(data));
    //   })
    // );
  }
}
