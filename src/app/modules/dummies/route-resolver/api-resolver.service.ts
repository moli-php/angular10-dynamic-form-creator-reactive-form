import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ApiService } from '../../../service/api.service';
import { Observable, empty, forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiResolverService implements Resolve<any> {

  constructor(private apiService: ApiService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
      const payload = {title: 'e'};
      const payload2 = {code: 401};
      return forkJoin({
        contents: this.apiService.searchContent(payload).pipe(catchError((err) => of(undefined))),
        account: this.apiService.showAccount(1).pipe(catchError((err) => of(undefined))),
        someError: this.apiService.someError(payload2).pipe(catchError((err) => of(undefined))),
        someError2: this.apiService.someError(payload2).pipe(catchError((err) => of(undefined))),
        someError3: this.apiService.someError({code:500}).pipe(catchError((err) => of(undefined))),
        account2: this.apiService.showAccount(2).pipe(catchError((err) => of(undefined))),
      }).pipe(
        catchError((err) => of(undefined))
      )
  }
}
