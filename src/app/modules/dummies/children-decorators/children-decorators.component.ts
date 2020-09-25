import { Component, OnInit, Input, AfterContentInit, AfterViewInit, ViewChild, ViewChildren, 
        QueryList, ElementRef, ContentChild, ContentChildren } from '@angular/core';

class MyJoke {
  public setup: string;
  public punchline: string;
  public hide: boolean = true;

  constructor(setup: string, punchline: string) {
    this.setup = setup;
    this.punchline = punchline;
    console.log('************************MyJoke')
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
                <p [hidden]="myJoke.hide"><ng-content select=".punchline"></ng-content></p>
                <button (click)="myJoke.toggle()">Tell me</button>
              </div>`
})
export class JokeComponent {
  @Input("myJoke") myJoke: MyJoke;
}
///////////////////////////////////////////////////////
@Component({
  selector: "app-joke-list",
  template: `<h4 #myTitle>View Jokes</h4>
              <app-joke *ngFor="let joke of jokes" [myJoke]="joke">
                <span class="setup">{{joke.setup}}</span>
                <h1 class="punchline">{{joke.punchline}}</h1>
              </app-joke>
              <hr>
              <h4>Content Jokes</h4>
              <ng-content></ng-content>`
})
export class JokeListComponent implements OnInit, AfterContentInit, AfterViewInit {
  jokes: MyJoke[] = [
      new MyJoke("What did the dog say?", "Aww, aww"),
      new MyJoke("What did the cat say?", "meow, meow")
  ];

  @ViewChild(JokeComponent) jokeViewChild: JokeComponent;
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
  @ViewChild("myTitle") headerEl: ElementRef;
  @ContentChild(JokeComponent) jokeContentChild: JokeComponent;
  @ContentChildren(JokeComponent) jokeContentChildren: QueryList<JokeComponent>;

  constructor() {
    console.log('************************JokeListComponent')
    console.log(`JokeListComponent constructor: jokeViewChild is ${this.jokeViewChild}`);
    console.log(`JokeListComponent constructor: jokeContentChild is ${this.jokeContentChild}`);
  }

  ngOnInit() {
    // this.jokes[1].toggle();
  }

  ngAfterContentInit() {
    console.log(`ngAfterContentInit: jokeContentChild is ${this.jokeContentChild}`);
    console.log(this.jokeContentChild instanceof JokeComponent);
    console.log(this.jokeContentChild);
    console.log(this.jokeContentChild.myJoke)
    console.log(this.jokeContentChild.myJoke.punchline)
    let jokes = this.jokeContentChildren.toArray();
    console.log(jokes[0].myJoke);
  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit: jokeViewChild is ${this.jokeViewChild}`);
    console.log('this.jokeViewChild')
    console.log(this.jokeViewChild)
    console.log('this.jokeViewChild.myJoke')
    console.log(this.jokeViewChild.myJoke)
    console.log('this.jokeViewChild.joke.punchline')
    console.log(this.jokeViewChild.myJoke.punchline)
    let jokes: JokeComponent[] = this.jokeViewChildren.toArray();
    console.log(jokes);
    console.log(`ngAfterViewInit: headerEl old title: '${this.headerEl.nativeElement.textContent}'`);
    this.headerEl.nativeElement.textContent = "Best Joke Here -> change title on the fly";
  }
}
///////////////////////////////////////////////////////
@Component({
  selector: 'app-children-decorators',
  templateUrl: './children-decorators.component.html',
  styleUrls: ['./children-decorators.component.css']
})
export class ChildrenDecoratorsComponent implements OnInit {
  myJokeParent: MyJoke = new MyJoke("Joke in the Parent", "Parent joke");
  flag: boolean = true;

  constructor() {
    console.log('************************ChildrenDecoratorsComponent')
   }

  ngOnInit(): void {
  }

}
