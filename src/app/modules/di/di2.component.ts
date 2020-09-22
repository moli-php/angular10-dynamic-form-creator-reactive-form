import { Component, OnInit, InjectionToken, Injectable, Inject, Optional, Input, Host } from '@angular/core';
import { HeroCacheService } from './hero-cache.service';
import { HeroService } from './hero.service';

export interface IPerson {
  name: string;
  age: number;
}

export const PERSON_TOKEN = new InjectionToken<IPerson>('data');

export const PERSON_DATA: IPerson = {
  name: 'john',
  age: 43
}

@Component({
  selector: 'app-person',
  template: '',
  providers: [
    {provide: PERSON_TOKEN, useValue: PERSON_DATA}
  ]
})
export class PersonComponent {
  constructor(@Inject(PERSON_TOKEN) private person: IPerson) {
    console.log(this.person);
  }
}

// @Injectable({
//   providedIn: 'root'
// })
export class MyService {
  sample() {
    return 123;
  }
}

@Component({
  selector: 'app-my',
  template: '',
  providers: [MyService]
})
export class MyComponent {
  constructor(private myService: MyService) {
    console.log(this.myService.sample());
  }
}

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  logs: string[] = [];
  logInfo(msg: any) {this.log(`INFO: ${msg}`);}
  logError(msg: any) {this.log(`ERROR: ${msg}`);}
  private log(msg: any) {
    this.logs.push(msg);
    console.log(this.logs);
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userId: 11;
}

@Injectable({
  providedIn: 'root'
})
export class UserContextService {
  constructor(private userService: UserService, private loggerService: LoggerService) {
    loggerService.logInfo('UserContextService initialized')
  }

  loadUser(id: number) {
    const users = [
      {id:1, name: 'Mick'},
      {id:2, name: 'Larry'},
      {id:3, name: 'June'}
    ];
    return users.find((user) => user.id === id)
  }
}

@Component({
  selector: 'app-my2',
  template: ''
})
export class My2Component {
  userId: number = 1;
  constructor(logger: LoggerService, public userContext: UserContextService) {
    userContext.loadUser(this.userId);
    logger.logInfo('My2Component initialized');
    console.log(userContext.loadUser(this.userId))
  }
}


@Component({
  selector: 'app-hero-bio',
  template: `
    <h4>{{hero.name}}</h4>
    <ng-content></ng-content>
    <textarea cols="25" [(ngModel)]="hero.description"></textarea>`,
  providers: [HeroCacheService, LoggerService]
})
export class HeroBioComponent implements OnInit  {
  @Input() heroId: number;

  constructor(private heroCacheService: HeroCacheService) { }

  ngOnInit() { this.heroCacheService.fetchCachedHero(this.heroId); }

  get hero() { return this.heroCacheService.hero; }
}

@Component({
  selector: 'app-hero-bios',
  template: `
    <app-hero-bio [heroId]="1"></app-hero-bio>
    <app-hero-bio [heroId]="2"></app-hero-bio>
    <app-hero-bio [heroId]="3"></app-hero-bio>`,
  // providers: [HeroService]
})
export class HeroBiosComponent {
  constructor(logger: LoggerService) {
    logger.logInfo('Creating HeroBiosComponent');
  }
}

@Component({
  selector: 'app-hero-bios-and-contacts',
  template: `
    <app-hero-bio [heroId]="1"> <app-hero-contact></app-hero-contact> </app-hero-bio>
    <app-hero-bio [heroId]="2"> <app-hero-contact></app-hero-contact> </app-hero-bio>
    <app-hero-bio [heroId]="3"> 
      <app-hero-contact>
        <app-other-contact></app-other-contact>
      </app-hero-contact> 
    </app-hero-bio>`,
  // providers: [HeroService]
})
export class HeroBiosAndContactsComponent {
  constructor(logger: LoggerService) {
    logger.logInfo('Creating HeroBiosAndContactsComponent');
  }
}


@Component({
  selector: 'app-other-contact',
  template: `other contact: {{phoneNumberAgain}}`,
})
export class OtherContactComponent implements OnInit  {
  constructor(private heroCacheService: HeroCacheService, @Host() @Optional() private logger: LoggerService) {
    // logger.logInfo('other contatct initialized')
    console.log(this.heroCacheService)
    console.log(this.logger) //null
  }
  ngOnInit() {
    console.log(this.heroCacheService.hero)
  }

  get phoneNumberAgain() { return this.heroCacheService.hero.phone; }
}

@Component({
  selector: 'app-hero-contact',
  template: `
  <div>Phone #: {{phoneNumber}}
  <span *ngIf="hasLogger">!!!</span></div>`
  +
  `<div><ng-content></ng-content></div>`,
})
export class HeroContactComponent implements OnInit {
  hasLogger = false;
  constructor(
      @Host() // limit to the host component's instance of the HeroCacheService
      private heroCache: HeroCacheService,

      @Host()     // limit search for logger; hides the application-wide logger
      @Optional() // ok if the logger doesn't exist
      private loggerService?: LoggerService
  ) {
    if (loggerService) {
      this.hasLogger = true;
      loggerService.logInfo('HeroContactComponent can log!');
    }
  }

  ngOnInit() {
    console.log(this.heroCache.hero)
    console.log(this.loggerService)
  }

  get phoneNumber() { return this.heroCache.hero.phone; }

}


//////////////////////////////////

@Component({
  selector: 'app-di2',
  templateUrl: './di2.component.html'
})
export class Di2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
