import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { Router } from '@angular/router';
import { ENV_CONSTANTS } from '../shared/EnvConstant';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endPoint: string = 'http://laravel5.4.local/api/';
  options: any;
  isLoggedIn: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
    this.options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'charset': 'UTF-8'
      })
    };

    if (localStorage.getItem('token')) {
      this.isLoggedIn = true;
    }

  }

  public login(reqData): Observable<any> {
    return this.http.post(ENV_CONSTANTS.lv5EndPoint + 'dummy/login', JSON.stringify(reqData), this.options);
  }

  public getUserInfo(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  public logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/dummies/login']);
  }





}
