import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  sideBarIsOpened: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideBar() {
    this.sideBarIsOpened = !this.sideBarIsOpened;
  }

}
