import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-basic-binding-child',
  templateUrl: './basic-binding-child.component.html',
  styleUrls: ['./basic-binding-child.component.css']
})
export class BasicBindingChildComponent implements OnInit {
  @Input() fromChildNumber : number | string;
  @Output() changeNumber = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.fromChildNumber)
  }

  desc() {
    this.fromChildNumber = +`${this.fromChildNumber}` - 1;
    this.changeNumber.emit(this.fromChildNumber);
  }

  asc() {
    this.fromChildNumber = +`${this.fromChildNumber}` + 1;
    this.changeNumber.emit(this.fromChildNumber);
  }


  
  



}
