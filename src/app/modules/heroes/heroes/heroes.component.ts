import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../interface/hero';
import { HeroesService } from '../../../service/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[];

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe((heroes) => this.heroes = heroes);
  }

}
