import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  constructor() { }

  bestHero(): string {
    return 'Superman';
  }

  superHeroes(): Observable<any[]> {
   return of(['superman', 'batman']);
  }
}