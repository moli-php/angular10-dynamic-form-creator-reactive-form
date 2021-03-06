import { Component, OnInit, Input } from '@angular/core';
import { ParentChild } from '../../../../interface/parent-child';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() parentChildren: ParentChild[];

  constructor() { }

  ngOnInit(): void {
  }

}
