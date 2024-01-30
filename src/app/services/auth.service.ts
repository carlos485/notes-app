import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string;

  constructor(@Inject(HttpClient) private http: HttpClient) {
    this.url = 'http://localhost:3000';
  }

  register(body: any): Observable<any> {
    const { name, email, password } = body;
    return this.http
      .post(`${this.url}/api/v1/auth/register`, {
        name,
        email,
        password,
      })
      .pipe(catchError((obj) => throwError(obj.error.message)));
  }

  login(body: any): Observable<any> {
    const { email, password } = body;
    return this.http
      .post(`${this.url}/api/v1/auth/login`, {
        email,
        password,
      })
      .pipe(catchError((obj) => throwError(obj.error.message)));
  }
}
