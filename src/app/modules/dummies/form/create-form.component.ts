import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
})
export class CreateFormComponent implements OnInit {
  @Input() item: any;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.form.get('firtname'))
  }

}
