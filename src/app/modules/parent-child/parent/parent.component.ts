import { Component, OnInit } from '@angular/core';
import { ParentChildService } from '../../../service/parent-child.service';
import { ParentChild } from '../../../interface/parent-child';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentChild: ParentChild[];
  parentTitle: string = 'Parent Title';

  constructor(private parentChildService: ParentChildService) { }

  ngOnInit(): void {

    this.parentChildService.getParentChild().subscribe((parentChild) => this.parentChild = parentChild);
    this.sampleLog();

  }

  sampleLog() : void {
    console.log('log');
    console.error('error');
    console.warn('warn');
  }

}
