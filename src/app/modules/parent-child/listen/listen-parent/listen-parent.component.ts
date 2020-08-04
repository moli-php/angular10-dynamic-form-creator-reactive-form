import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/interface/hero';
import { HeroesService } from 'src/app/service/heroes.service';

@Component({
  selector: 'app-listen-parent',
  templateUrl: './listen-parent.component.html',
  styleUrls: ['./listen-parent.component.css']
})
export class ListenParentComponent implements OnInit {
  heroes: Hero[];
  agree: number = 0;
  disagree: number = 0;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe((heroes) => this.heroes = heroes);
  }

  onVote(value: boolean) {
    value ? this.agree++ : this.disagree++;
  }

  

}
