import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar2',
  templateUrl: './side-bar2.component.html',
  styleUrls: ['./side-bar2.component.css']
})
export class SideBar2Component implements OnInit {
  
  @HostBinding('class.is-open')
  @Input() isOpen: Boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
