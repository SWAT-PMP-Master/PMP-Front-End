import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  singIn(): Observable<any> {
    return this.http.get(
      `${environment.URL_API}auth/sign-in/${localStorage.getItem(
        'trello_token'
      )}`
    );
  }
}
