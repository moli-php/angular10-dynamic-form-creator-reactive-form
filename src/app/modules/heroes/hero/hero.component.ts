import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../interface/hero';
import { HeroesService } from '../../../service/heroes.service';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  public hero: Hero;

  constructor(private heroesService: HeroesService, private route: ActivatedRoute,
     private location: Location) { }

  ngOnInit(): void {
    this.getHero();
    this.route.queryParams.subscribe(params => {
      console.log(params);
    })
  }

  public getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    // console.log(this.paramMap.get('id'))
    this.heroesService.getHero(id).subscribe((hero) => this.hero = hero);
  }

  public goBack() {
    this.location.back();
  }



}
