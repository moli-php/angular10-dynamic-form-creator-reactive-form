import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
})
export class CreateFormComponent implements OnInit {
  @Input() item: any;
  @Input() form: FormGroup;
  aa: any;

  constructor() { 
    // this.aa = this.form.get('aa') as FormArray;
    // this.item.key
  }

  ngOnInit(): void {
    console.log(this.form.controls)
  }

}
