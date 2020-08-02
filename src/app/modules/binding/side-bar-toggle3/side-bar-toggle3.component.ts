import { Component, OnInit, HostListener } from '@angular/core';
import { SideBarService } from '../side-bar3/side-bar.service';

@Component({
  selector: 'app-side-bar-toggle3',
  templateUrl: './side-bar-toggle3.component.html',
  styleUrls: ['./side-bar-toggle3.component.css']
})
export class SideBarToggle3Component implements OnInit {

  constructor(private sideBarService: SideBarService) { }

  // @HostListener('click')
  // onClick() {
  //   this.sideBarService.toggle();
  // }

  @HostListener('click', ['$event.target'])
  onClick(target) {
    this.sideBarService.toggle2(target.tagName);
  }


  ngOnInit(): void {
  }

}
