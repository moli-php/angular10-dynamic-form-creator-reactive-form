import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  providers: [SampleService]

})
export class Child2Component implements OnInit {

  constructor(public sampleService: SampleService) { }

  ngOnInit(): void {
  }

}
