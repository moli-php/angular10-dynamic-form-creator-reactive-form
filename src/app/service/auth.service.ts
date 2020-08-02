import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endPoint: string = 'http://laravel5.4.local/api/';
  options: any;

  constructor(private http: HttpClient, private router: Router) {
    this.options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'charset': 'UTF-8'
      })
    };

  }

  public login(reqData): Observable<any> {
    return this.http.post(this.endPoint + 'dummy/login', JSON.stringify(reqData), this.options);
  }

  public getUserInfo(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  public logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }





}
