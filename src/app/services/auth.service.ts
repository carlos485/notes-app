import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string;

  constructor(private readonly http: HttpClient) {
    this.url = 'localhost:3000';
  }

  login(body: object) {
    return this.http.post(`${this.url}/api/v1/auth/login`, body);
  }
}
