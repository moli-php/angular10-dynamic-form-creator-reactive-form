import { Component, OnInit, HostBinding } from '@angular/core';
import { SideBarService } from './side-bar.service';

@Component({
  selector: 'app-side-bar3',
  templateUrl: './side-bar3.component.html',
  styleUrls: ['./side-bar3.component.css']
})
export class SideBar3Component implements OnInit {
  @HostBinding('class.is-open') isOpen = false;
  tagName: string = '';

  constructor(private sideBarService: SideBarService) { }

  ngOnInit(): void {
    this.sideBarService.change.subscribe((isOpen) => this.isOpen = isOpen );
    this.sideBarService.getTagName.subscribe(tagName => this.tagName = tagName);
  }

}
