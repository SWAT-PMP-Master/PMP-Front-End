import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BoardsService {
  user = JSON.parse(localStorage.getItem('user'));

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'applicattion/json',
      Authorization: `Bearer ${this.user.body.token}`,
    }),
  };

  constructor(private http: HttpClient) {}

  getBoards(): Observable<any> {
    return this.http.get(
      `${environment.URL_API}trello/boards`,
      this.httpOptions
    );
  }

  getBoard(id: string): Observable<any> {
    return this.http.get(
      `${environment.URL_API}boards/${id}`,
      this.httpOptions
    );
  }
}
