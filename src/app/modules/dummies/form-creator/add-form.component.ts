import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html'
})
export class AddFormComponent implements OnInit {
  @Input() optionType: string | null;
  @Output() add: EventEmitter<any> = new EventEmitter();

  addForm: FormGroup;
  optionGroup: FormGroup;


  constructor(private fb: FormBuilder) {
    this.optionGroup = this.fb.group({label:[],value:[]});

    this.addForm = this.fb.group({
      label: [],
      key: [],
      id: [],
      requried: [],
      checkboxOption: ['single'],
      selectboxOption: [false],
      optionArray: this.fb.array([this.optionGroup]),
      // groupRadioOptions: this.fb.array([this.optionGroup])
    });
  }

  ngOnInit(): void {
  }

  createForm() {
    console.log(this.addForm.value)
    this.add.emit(this.addForm.value);
    this.resetFormFields();
    console.log(this.addForm.controls)
  }
  
  resetFormFields() {
    this.addForm.reset(''); // erase values after emitted
    //reset array controls
    this.addForm.setControl('optionArray', this.fb.array([this.fb.group({label:[],value:[]})]));
  }

  addNewOption() {
    const newGroup = this.fb.group({label: [], value: [] })
    const addFormArray = this.addForm.get('optionArray') as FormArray;
    addFormArray.push(newGroup);
  }

}
