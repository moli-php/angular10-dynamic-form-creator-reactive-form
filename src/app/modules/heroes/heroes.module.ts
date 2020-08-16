import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroComponent } from './hero/hero.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { HeroesService } from '../../service/heroes.service';
import { DummyService } from '../../service/dummy.service';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeroesComponent, HeroComponent, DashboardComponent, NavComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    HeroesService,
    DummyService
  ]
})
export class HeroesModule { }
