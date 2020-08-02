import { Component, OnInit, HostBinding, Input, HostListener } from '@angular/core';
// import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-side-bar-toggle',
  templateUrl: './side-bar-toggle.component.html',
  styleUrls: ['./side-bar-toggle.component.css']
})
export class SideBarToggleComponent implements OnInit {

  // @Input() sideBarComponent: SideBarComponent;
  @Input() sideBarComponent; // same as above

  @HostListener('click')
  click() {
    this.sideBarComponent.toggle();
    console.log(this.sideBarComponent);
  }

  constructor() { }

  ngOnInit(): void {
    // console.log(this.sideBar)
  }

}
