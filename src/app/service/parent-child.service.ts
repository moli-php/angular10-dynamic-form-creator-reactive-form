import { Injectable } from '@angular/core';
import { PARENTCHILDMOCK } from './mock/mock-parent-child';
import { ParentChild } from '../interface/parent-child';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentChildService {

  constructor() { }

  public getParentChild(): Observable<ParentChild[]> {

    return of(PARENTCHILDMOCK);
  }

}
