import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';


@Component({
  selector: 'app-side-bar-toggle2',
  templateUrl: './side-bar-toggle2.component.html',
  styleUrls: ['./side-bar-toggle2.component.css']
})
export class SideBarToggle2Component implements OnInit {

  @Output() toggle: EventEmitter<null> = new EventEmitter();
  
  @HostListener('click')
  click() {
    this.toggle.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
