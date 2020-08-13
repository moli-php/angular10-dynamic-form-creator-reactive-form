import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../interface/hero';
import { HeroesService } from '../../../service/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[];

  constructor(private heroesService: HeroesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe((heroes) => this.heroes = heroes);
    console.log(this.route.snapshot.paramMap.get('id'));
    //this.leadId = this.route.snapshot.paramMap.get('leadId').toLowerCase()
  }

}
