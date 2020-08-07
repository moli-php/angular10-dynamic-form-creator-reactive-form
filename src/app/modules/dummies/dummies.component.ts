import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dummies',
  templateUrl: './dummies.component.html',
  styleUrls: ['./dummies.component.css']
})
export class DummiesComponent implements OnInit, OnDestroy {
  timer: any;


  constructor() { }

  ngOnInit(): void {
    // this.loopLimit(-1);
  }

  ngOnDestroy(): void  {
    // clearInterval(this.timer);
  }

  loopLimit(numberStart: number) {
    this.timer = window.setInterval(() => {
      numberStart = (numberStart + 1) % 10;
      console.log(numberStart);
    },1000);
  }

}
