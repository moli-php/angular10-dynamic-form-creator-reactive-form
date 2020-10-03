import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html'
})
export class AddFormComponent implements OnInit {
  @Input() optionType: string | null;
  @Output() add: EventEmitter<any> = new EventEmitter();

  addForm = this.fb.group({
    label: [],
    key: [],
    id: [],
    requried: []
  });

  constructor(private fb: FormBuilder, private el: ElementRef) { }

  ngOnInit(): void {
  }
 
  addSubmit() {
    // console.log(this.addForm.valid)
    // return false;
    this.add.emit(this.addForm.value);
    this.addForm.reset(''); // erase values after emitted
  }

}
