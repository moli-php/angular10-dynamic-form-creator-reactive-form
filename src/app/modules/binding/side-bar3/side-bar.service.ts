import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {

  isOpen: boolean = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();
  @Output() getTagName: EventEmitter<string> = new EventEmitter();
  
 
  constructor() { }

  toggle() {
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
  }

  toggle2(tagName) {
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
    this.getTagName.emit(tagName);
  }
}
