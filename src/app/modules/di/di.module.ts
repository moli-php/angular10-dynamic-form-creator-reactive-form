import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiComponent } from './di.component';
import { Di2Component } from './di2.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { SampleService } from './sample.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Parent2Component } from './parent2/parent2.component';
import { Child2Component } from './child2/child2.component';
import { ParentFinderComponent, ChrisComponent, BarryComponent, AliceComponent, CarolComponent } from './parent-finder/parent-finder.component';
import { StrategyComponent, PlusComponent, MinusComponent, CustomComponent, StrategyService, PlusStrategy, IStrategy } from './strategy/strategy.component';
import { PersonComponent, MyComponent, My2Component, HeroContactComponent, HeroBiosComponent, HeroBioComponent,
  HeroBiosAndContactsComponent, OtherContactComponent } from './di2.component';


@NgModule({
  declarations: [DiComponent, Di2Component, Parent1Component, Child1Component, Parent2Component, Child2Component, 
    ParentFinderComponent, ChrisComponent, BarryComponent, AliceComponent, CarolComponent,
    StrategyComponent, PlusComponent, MinusComponent, CustomComponent,
    PersonComponent, MyComponent, My2Component, HeroContactComponent, HeroBiosComponent, HeroBioComponent,
    HeroBiosAndContactsComponent, OtherContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    SampleService,
    // StrategyService,
    // {provide: IStrategy, useClass: PlusStrategy}
  ]
})
export class DiModule { }
