import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  endPoint: string = 'http://laravel.local/api/';
  options: any;

  constructor(private http: HttpClient) {
    this.options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'charset': 'UTF-8'
      })
    };
  }

  getSample(): Observable<any>  {
    //return this.http.get(this.endPoint + 'dummy/sample', this.options);
    //return this.http.get('http://localhost/sample_data.php', this.options);
    return this.http.get(this.endPoint + 'dummy/sample', this.options);
  }

  getDelaySample(): Observable<any>  {
    return this.http.get(this.endPoint + 'dummy/delay-sample');
  }

  getAwaitSample() {
    return this.http.get(this.endPoint + 'dummy/sample-await', this.options);
  }


}
