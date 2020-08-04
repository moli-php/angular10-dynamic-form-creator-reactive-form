import { Component, OnInit, ContentChild, ViewChild, AfterViewInit } from '@angular/core';
import { InteractChildComponent } from '../interact-child/interact-child.component';

@Component({
  selector: 'app-interact-parent',
  templateUrl: './interact-parent.component.html',
  styleUrls: ['./interact-parent.component.css']
})
export class InteractParentComponent implements OnInit, AfterViewInit {
  // this is just having testing on whats the differences;
  @ContentChild(InteractChildComponent) contentChild: InteractChildComponent;
  @ViewChild(InteractChildComponent) viewChild: InteractChildComponent;
  directChild: InteractChildComponent = new InteractChildComponent();

  constructor() {
   }

  ngOnInit(): void {
    console.log(this.contentChild); // undefined
    console.log(this.viewChild); // undefined
    console.log(this.directChild);
  }

  ngAfterViewInit(): void {
    console.log(this.contentChild); // undefiend
    console.log(this.viewChild);
    console.log(this.directChild);
  }

  testClick() {
    console.log(this.contentChild); // TODO: look what is the used of 'ContentChild'
    this.viewChild.clickMe();
    console.log(this.viewChild.myName);
  }

}
