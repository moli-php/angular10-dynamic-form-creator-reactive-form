import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title = new FormControl();

  constructor() { }

  ngOnInit(): void {
    this.title.valueChanges.subscribe(val => console.log(val))
  }

}
