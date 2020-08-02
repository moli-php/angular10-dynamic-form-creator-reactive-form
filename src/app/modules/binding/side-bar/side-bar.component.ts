import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  @HostBinding('class.is-open') isOpen = false;
  @HostBinding('class.my-custom-color') myColor = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.myColor = !this.myColor;
  }



}
