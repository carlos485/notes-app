import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string;

  constructor(@Inject(HttpClient) private http: HttpClient) {
    this.url = 'http://localhost:3000';
  }

  login(body: object): Observable<any> {
    return this.http.post(`${this.url}/api/v1/auth/login`, body);
  }
}
