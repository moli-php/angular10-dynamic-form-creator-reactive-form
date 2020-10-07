import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ENV_CONSTANTS } from '../shared/EnvConstant';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // endPoint: string = 'http://laravel.test/api/';
  options: any;

  constructor(private http: HttpClient) {
    this.options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'charset': 'UTF-8',
      })
    };
  }

  getSample(): Observable<any>  {
    return this.http.get(ENV_CONSTANTS.lv5EndPoint + 'dummy/sample', this.options);
  }

  getDelaySample(): Observable<any>  {
    return this.http.get(ENV_CONSTANTS.lv5EndPoint + 'dummy/delay-sample');
  }

  getAwaitSample() {
    return this.http.get(ENV_CONSTANTS.lv5EndPoint + 'dummy/sample-await', this.options);
  }

  public searchContent(reqData): Observable<object> {
    return this.http.post(ENV_CONSTANTS.lv5EndPoint + 'dummy/search-content', JSON.stringify(reqData), this.options);
  }

  public showAccount(id: number): Observable<object> {
    return this.http.get(ENV_CONSTANTS.lv5EndPoint + `dummy/show-account/${id}`);
  }

  public showSponsor(id: number): Observable<object> {
    return this.http.get(ENV_CONSTANTS.lv5EndPoint + `dummy/show-sponsor/${id}`);
  }

  public someError(reqData): any {
    return this.http.post(ENV_CONSTANTS.lv5EndPoint + `dummy/some-error`, JSON.stringify(reqData), this.options);
  }




}
