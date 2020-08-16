import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  // providers: [SampleService]
})
export class Child1Component implements OnInit {

  constructor(public sampleService: SampleService) { }

  ngOnInit(): void {
  }

}
