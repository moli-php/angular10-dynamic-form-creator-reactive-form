import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-binding',
  templateUrl: './basic-binding.component.html',
  styleUrls: ['./basic-binding.component.css']
})
export class BasicBindingComponent implements OnInit {
  fromParentNumber: number;
  fromParentNumber2: number;

  constructor() {
    this.fromParentNumber = 1;
    this.fromParentNumber2 = 1;
   }

  ngOnInit(): void {
    console.log(this.fromParentNumber)
  }


}
