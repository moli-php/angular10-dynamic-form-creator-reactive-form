import { Component, OnInit, EventEmitter, Input, Output, OnChanges, SimpleChange } from '@angular/core';
import { Hero } from 'src/app/interface/hero';

@Component({
  selector: 'app-listen-child',
  templateUrl: './listen-child.component.html',
  styleUrls: ['./listen-child.component.css']
})
export class ListenChildComponent implements OnInit, OnChanges {
  @Input() heroItem: Hero;
  @Output() vote: EventEmitter<boolean> = new EventEmitter();
  isDisabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // just do some testing
  ngOnChanges(changes: {[propKey: string]: SimpleChange}): void {
    // console.log(changes);
    for (const item in changes) {
      console.log(item);
      console.log(changes[item])
      const changedProp = changes[item];
      console.log(changedProp.isFirstChange());
      if (changedProp.isFirstChange()) {
        console.log(1)
      } else {
        console.log(0)
      }
    }
  }

  voteMe(value: boolean) {
    this.vote.emit(value);
    this.isDisabled = true;
  }

  testChange() {
    console.log(this.heroItem);
    if (this.heroItem.id === 11) {
      this.heroItem.name = 'Dr. No';
    }
  }

}
