import { Component, OnInit, Injectable, Optional, InjectionToken } from '@angular/core';


export abstract class IStrategy {
  abstract calculate(a, b): number;
}

export class PlusStrategy implements IStrategy {
  calculate(a, b): number {
    return a + b;
  }
}

export class MinusStrategy implements IStrategy {
  calculate(a, b): number {
    return a - b;
  }
}

@Injectable({
  providedIn: 'root'
})
export class StrategyFactory {
  createStrategy<T extends IStrategy>(c: new() => T): T {
    return new c();
  }
}


@Injectable({
  providedIn: 'root'
})
export class StrategyService {
  constructor(private strategy: IStrategy, private strategyFactory: StrategyFactory) {}
  compute(a,b) {
    return this.strategy.calculate(a,b);
  }

  minusCompute(a,b) {
    return this.strategyFactory.createStrategy(MinusStrategy).calculate(a,b);
  }
}

export const REGISTER_STRATEGY = new InjectionToken<IStrategy>('custom strategy');

@Component({
  selector: 'app-custom',
  template: '',
  providers: [
    StrategyService,
    {provide: REGISTER_STRATEGY, useClass: MinusStrategy}
  ]
})
export class CustomComponent {
  // constructor(private strategyService: StrategyService) {
  //   console.log('custom')
  //   console.log(this.strategyService.compute(3,5))
  // not working
  // }
  constructor() {}
}


@Component({
  selector: 'app-plus',
  template: '',
  providers: [
    StrategyService,
    {provide: IStrategy, useClass: PlusStrategy}]
 
})
export class PlusComponent {
    constructor(private strategy: IStrategy, private strategyService: StrategyService) {
      console.log('plus strategy')
      console.log(this.strategy.calculate(1,2))
      // the magic on strategyService will only work if injected on the module level as the provider.
      // Injecting on component level will not work 
      console.log(this.strategyService.compute(1,2))
    }
}

@Component({
  selector: 'app-minus',
  template: '',
  providers: [
    {provide: IStrategy, useClass: MinusStrategy}
  ]
})
export class MinusComponent {
    constructor(private stragegy: IStrategy, private strategyFactory: StrategyFactory) {
      console.log('minus strategy')
      console.log(this.stragegy.calculate(1,2))
      console.log(this.strategyFactory.createStrategy(MinusStrategy).calculate(8,4));

    }
}





/////////////////////////////
@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.css']
})
export class StrategyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
