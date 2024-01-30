import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, catchError, throwError, map } from 'rxjs';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string;

  constructor(
    @Inject(HttpClient) private http: HttpClient,
    private readonly jwt: JwtHelperService
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
          const user: User = User.fromLogin(decode, obj['access_token']);
        }),
        catchError((obj) => throwError(obj.error.message))
      );
  }
}
