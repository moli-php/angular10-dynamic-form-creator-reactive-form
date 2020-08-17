import { Component, OnInit, forwardRef, Optional, SkipSelf } from '@angular/core';

// A component base class (see AlexComponent)
export abstract class Base { name = 'Count Basie'; }

// Marker class, used as an interface
export abstract class Parent { 
  name: string = 'Papa';
  title: string;
}

const DifferentParent = Parent;

// Helper method to provide the current component instance in the name of a `parentType`.
// The `parentType` defaults to `Parent` when omitting the second parameter.
export function provideParent
  (component: any, parentType?: any) {
    return { provide: parentType || Parent, useExisting: forwardRef(() => component) };
  }

// Simpler syntax version that always provides the component in the name of `Parent`.
// export function provideTheParent
//   (component: any) {
//     return { provide: Parent, useExisting: forwardRef(() => component) };
//   }

  @Component({
    selector: 'alice',
    template: `
      <div class="a">
        <h3>{{name}}</h3>
        <barry></barry>

      </div> `,
    providers:  [ provideParent(AliceComponent) ]
  })
  export class AliceComponent implements Parent
  {
    name = 'Alice';
    title = 'sample title';
  }

  const templateB = `
  <div class="b">
    <div>
      <h3>{{name}}</h3>
      <p>My parent is {{parent?.name}}</p>
    </div>
    <carol></carol>
    <chris></chris>
  </div>`;
  @Component({
    selector:   'barry',
    template:   templateB,
    providers:  [{ provide: Parent, useExisting: forwardRef(() => BarryComponent) }]
  })
  export class BarryComponent implements Parent {
    name = 'Barry';
    title = 'test';
    constructor( @SkipSelf() @Optional() public parent?: Parent ) { }
  }

  const templateC = `
  <div class="c">
    <h3>{{name}}</h3>
    <p>My parent is {{parent?.name}}</p>
  </div>`;

@Component({
  selector: 'carol',
  template: templateC
})
export class CarolComponent {
  name = 'Carol';
  constructor( @Optional() public parent?: Parent ) { }
}

@Component({
  selector: 'chris',
  template: templateC
})
export class ChrisComponent {
  name = 'Chris';
  constructor( @Optional() public parent?: Parent ) { }
}

  /////////////////////////////////////////////////////////////
@Component({
  selector: 'app-parent-finder',
  templateUrl: './parent-finder.component.html',
  styleUrls: ['./parent-finder.component.css']
})
export class ParentFinderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


