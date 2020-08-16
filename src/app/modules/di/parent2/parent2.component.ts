import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css'],
  providers: [SampleService]
})
export class Parent2Component implements OnInit {

  constructor(public sampleService: SampleService) { }

  ngOnInit(): void {
    const a = this.sampleService.getPerson(1);
    console.log(a);
  }

}
