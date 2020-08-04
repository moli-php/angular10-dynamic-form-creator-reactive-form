import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit, OnDestroy {
  basic: boolean = false;
  interact: boolean = false;
  listen: boolean = false;

  interval: any;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  toggle(page: string) {
    switch(page) {
      case 'basic':
        this.basic = !this.basic;
        break;
      case 'interact':
        this.interact = !this.interact;
        break;
      case 'listen':
        this.listen = !this.listen;
        break;
      default:
        console.log('none')

    }
  }

  test() {
    this.interval = window.setInterval((here) => {
      console.log(here)
    },1000)
  }

}
