import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.css']
})
export class FormCreatorComponent implements OnInit {

  addFormGroup = new FormGroup({});
  fieldTypeAdd = new FormControl();
  addFormCollection = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  createForm(values) {
    const fValues = Object.assign({type: this.fieldTypeAdd.value}, values)
    this.fieldTypeAdd.reset('')
    if (fValues.key) {
      let formControlValue: any = fValues.required ? this.fb.control('', Validators.required) : this.fb.control('');
      if (fValues.checkboxOption === 'multiple') {
        formControlValue = this.fb.array(fValues.optionArray.map(item => false))
      }
      // if (fValues.type === 'radio') {
      //   formControlValue = this.fb.array(fValues.groupRadioOptions.map(item => false))
      // }
      console.log(fValues.key, fValues, formControlValue)
      // add form collection
      this.addFormGroup.addControl(fValues.key, formControlValue);
    }
    // update data collection
    this.addFormCollection.push(fValues);
  }

  addFormSubmit() {
    this.addFormCollection.forEach((v) => {
     
      if (v.checkboxOption === 'multiple') {
        const dataHandler = [];
        const checBoxValue = this.addFormGroup.get(v.key).value;
        checBoxValue.map((mv,iv) => {
          if (mv) {
            checBoxValue[iv] = v.optionArray[iv].value;
            // dataHandler.push(v.groupCheckOptions[iv].value);
          }
        });
        // this.addFormGroup.setControl(v.key, this.fb.array(dataHandler))
      }
    })
    console.log(this.addFormGroup.value);
    // console.log(this.addFormCollection)

    
    
  }

}
