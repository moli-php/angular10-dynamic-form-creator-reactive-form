import { Component, OnInit, Injectable, Injector } from '@angular/core';

@Component({selector: 'hello-world', 
template: 'Hello World!'
})
export class HelloWorld {}

@Injectable()
export class Greeter {
  suffix = '!';
}

@Component({
  selector: 'complete-component',
  template: `Complete: <ng-content></ng-content> <ng-content></ng-content>{{ greeter.suffix }}`
})
export class CompleteComponent {
  constructor(public greeter: Greeter) {}
}


@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {
  helloWorld = HelloWorld;

  completeComponent = CompleteComponent;
  myInjector: Injector;
  myContent: Array<{}>; 

  constructor(injector: Injector) {
    this.myInjector = Injector.create({providers: [{provide: Greeter, deps: []}], parent: injector});
    this.myContent = [[document.createTextNode('Foo')], [document.createTextNode('Bar')]];
    console.log(this.myContent);
  }

  ngOnInit(): void {
  }

}
