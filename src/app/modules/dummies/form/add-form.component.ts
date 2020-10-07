import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

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
    requried: [],
    checkboxOption: ['single'],
    groupCheckOptions: this.fb.array([
      this.fb.group({
        label: [],
        key: [],
        value: []
      })
    ])
  });

  groupCheckOptions = this.addForm.get('groupCheckOptions') as FormArray;

  

  constructor(private fb: FormBuilder, private el: ElementRef) { }

  ngOnInit(): void {
  }

  // onOptionChange(e) {
  //   const value = e.target.value;

  //   console.log(e.target.value)
  // }
 
  addSubmit() {
    console.log(this.addForm.value)
    const a: FormArray = this.fb.array([
      this.fb.group({
        label: [],
        key: [],
        value: []
      })
    ])
    // return false;
    this.add.emit(this.addForm.value);
    this.addForm.reset(''); // erase values after emitted
    this.addForm.setControl('groupCheckOptions', a);
    console.log(this.addForm.controls)
  }

  addGroupCheckOption() {
    const newGroup = this.fb.group({label: [], key: [], value: [] })

    const addFormArray = this.addForm.get('groupCheckOptions') as FormArray;

    addFormArray.push(newGroup);
    // this.groupCheckOptions.push(newGroup);

  }

}
