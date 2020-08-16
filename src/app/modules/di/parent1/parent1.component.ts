import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css'],
  // providers: [SampleService]
})
export class Parent1Component implements OnInit {

  constructor(public sampleService: SampleService) { }

  ngOnInit(): void {
  }

}
