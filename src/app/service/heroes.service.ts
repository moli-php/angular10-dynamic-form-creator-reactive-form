import { Injectable } from '@angular/core';
import { Hero } from '../interface/hero';
import { HEROESMOCK} from './mock/mock-heroes';
import { Observable, of } from 'rxjs';
import { SuperHeroService } from './super-hero.service';

@Injectable({
  providedIn: 'root'
})
export class HeroesService extends SuperHeroService {

  constructor() {
    super();
    // console.log(this.bestHero());
    this.superHeroes().subscribe(heroes => {
      // console.log(heroes);
    })
  }

  getHeroes(): Observable<Hero[]> {
    return of(HEROESMOCK);
  }

  getHero(id: number): Observable<Hero> {
    return of(HEROESMOCK.find((hero) => hero.id === id));
  }
}
