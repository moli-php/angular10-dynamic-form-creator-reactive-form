import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.css']
})
export class NgTemplateComponent implements OnInit {
  isShow: boolean = true;
  isChecked: boolean = false;
  someData: Array<{}> = [];
  someData2: Array<{}> = [];

  constructor() { }

  ngOnInit(): void {
    this.someData = [
      {name: "John", gender: "m"},
      {name: "Jane", gender: "f"},
      {name: "Larry", gender: "m"},
      {name: "Marven", gender: "m"},
      {name: "Alexa", gender: "f"},
      {name: "Rey", gender: "m"},
      {name: "Jun", gender: "m"},
    ];
  }

}
