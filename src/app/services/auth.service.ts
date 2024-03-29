import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, catchError, throwError, map } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string;

  constructor(
    @Inject(HttpClient) private http: HttpClient,
    private readonly jwt: JwtHelperService,
    private readonly _rt: Router
  ) {
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
      .pipe(
        map(
          () => 'Usuario registrado con exito, por favor ahora inicia sesión'
        ),
        catchError((obj) => throwError(obj.error.message))
      );
  }

  login(body: any): Observable<any> {
    const { email, password } = body;
    return this.http
      .post(`${this.url}/api/v1/auth/login`, {
        email,
        password,
      })
      .pipe(
        map((obj: any) => {
          const decode = this.jwt.decodeToken(obj['access_token']);
          const user = User.fromLogin(decode, obj['access_token']);
          localStorage.setItem('user', JSON.stringify(user));
        }),
        catchError((obj) => throwError(obj.error.message))
      );
  }

  isAuth(): boolean {
    const user = localStorage.getItem('user');
    if (user) {
      return true;
    }
    return false;
  }
}
