import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interact-child',
  templateUrl: './interact-child.component.html',
  styleUrls: ['./interact-child.component.css']
})
export class InteractChildComponent implements OnInit {
  myName: string = 'hello';
  myNumber: number = 123;

  constructor() { }

  ngOnInit(): void {
  }

  clickMe() {
    alert('from child')
  }

}
