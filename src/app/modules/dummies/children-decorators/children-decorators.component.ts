import { Component, OnInit, Input, AfterContentInit, AfterViewInit, ViewChild, ViewChildren, 
        QueryList, ElementRef, ContentChild, ContentChildren } from '@angular/core';

class Joke {
  public setup: string;
  public punchline: string;
  public hide: boolean = true;

  constructor(setup: string, punchline: string) {
    this.setup = setup;
    this.punchline = punchline;
  }

  toggle() {
    this.hide = !this.hide;
  }
}
///////////////////////////////////////////////////////
@Component ({
  selector: 'app-joke',
  template: `<div>
                <h4><ng-content select=".setup"></ng-content></h4>
                <p [hidden]="joke.hide"><ng-content select=".punchline"></ng-content></p>
                <button (click)="joke.toggle()">Tell me</button>
              </div>`
})
export class JokeComponent {
  @Input("joke") joke: Joke;
}

@Component({
  selector: "app-joke-list",
  template: `<h4 #header>View Jokes</h4>
              <app-joke *ngFor="let j of jokes" [joke]="j">
                <span class="setup">{{j.setup}}</span>
                <h1 class="punchline">{{j.punchline}}</h1>
              </app-joke>
              <h4>Content Jokes</h4>
              <ng-content></ng-content>`
})


export class JokeListComponent implements OnInit, AfterContentInit, AfterViewInit {
  jokes: Joke[] = [
      new Joke("What did the dog say?", "Aww, aww"),
      new Joke("What did the cat say?", "meow, meow")
  ];

  @ViewChild(JokeComponent) jokeViewChild: JokeComponent;
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
  @ViewChild("header") headerEl: ElementRef;
  @ContentChild(JokeComponent) jokeContentChild: JokeComponent;
  @ContentChildren(JokeComponent) jokeContentChildren: QueryList<JokeComponent>;

  constructor() {
    console.log(`constructor: jokeViewChild is ${this.jokeViewChild}`);
    console.log(`constructor: jokeContentChild is ${this.jokeContentChild}`);
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log(`ngAfterContentInit: jokeContentChild is ${this.jokeContentChild}`);
    console.log(this.jokeContentChild instanceof JokeComponent);
    console.log(this.jokeContentChild);
    console.log(this.jokeContentChild.joke.punchline)
    let jokes = this.jokeContentChildren.toArray();
    console.log(jokes);

  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit: jokeViewChild is ${this.jokeViewChild}`);
    console.log(this.jokeViewChild)
    console.log(this.jokeViewChild.joke.punchline)
    let jokes: JokeComponent[] = this.jokeViewChildren.toArray();
    console.log(jokes);

    console.log(`ngAfterViewInit: headerEl is ${this.headerEl}`);
    this.headerEl.nativeElement.textContent = "Best Joke Here -> change title on the fly";
  }
}

@Component({
  selector: 'app-children-decorators',
  templateUrl: './children-decorators.component.html',
  styleUrls: ['./children-decorators.component.css']
})
export class ChildrenDecoratorsComponent implements OnInit {
  joke: Joke = new Joke("Joke in the Parent", "Parent joke");
  flag: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
