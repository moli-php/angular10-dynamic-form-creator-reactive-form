import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray, 
   ValidationErrors } from '@angular/forms';

export function PasswordMatch(password: string, confirmPassword: string): ValidationErrors | null {
  return (formGroup: FormGroup) => {
    const passwordControl = formGroup.controls[password];
    const confirmPasswordControl = formGroup.get(confirmPassword); // .get() is similar
    confirmPasswordControl.setErrors(null);
    if (
      (passwordControl.dirty && confirmPasswordControl.dirty) &&
      passwordControl.value !== confirmPasswordControl.value
      ) {
        confirmPasswordControl.setErrors({notMatch: true})
    }
  }
}


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title = new FormControl();
  fieldTypeAdd = new FormControl();
  addFormGroup = new FormGroup({});
  addFormCollection = [];

  myForm = new FormGroup({
    title: new FormControl(''),
    name: new FormControl(''),
    address: new FormGroup({
      zip: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      street: new FormControl()
    })
  });

  myFormBuilder = this.fb.group({
    title: [''],
    name: new FormControl(''),
    address: this.fb.group({
      street: [],
      zip: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      city: ['', Validators.minLength(3)],
      state: []
    })
  });
  dynamicForm = this.fb.group({
    name: [],
    favorites: this.fb.array([
      this.fb.control('')
    ])
  });

  myCustomValidationSubmitted: boolean = false;
  myCustomValidation = this.fb.group(
    {
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
    },
    {
      validator: PasswordMatch('password', 'confirmPassword')
    }
   
   
  )
  get favorites() {
    let a = this.dynamicForm.get('favorites') as FormArray;
    // console.log('here')
    // console.log(a.controls)
    return a;
  }

  // // this is same as above
  // favorites = this.dynamicForm.get('favorites') as FormArray;
  
  constructor(private fb: FormBuilder, private el: ElementRef) { }

  ngOnInit(): void {
    // this.title.valueChanges.subscribe(val => console.log(val))
    // this.myForm.valueChanges.subscribe(val => console.log(val));
    // this.dynamicForm.valueChanges.subscribe(val => console.log(val))
    // this.favorites.valueChanges.subscribe((val) => {
    //   console.log(val)
    // });
    // this.favorites.setControl(0, this.fb.control('mike'));
    // this.favorites.clear();
  }

  onFormSubmit() {
    // console.warn(this.myForm.value);
    console.warn('is valid: ' + this.myForm.valid);
    this.myForm.patchValue({
      title: 'new title',
      address: {
        street: 123
      }
    })
  }

  onForm2Submit() {
  //   console.warn(this.myFormBuilder.value);
    console.warn('is form2 valid: ' + this.myFormBuilder.valid);
    this.myFormBuilder.patchValue({
      title: 'new title',
      address: {
        street: 123
      }
    })
  }

  get myFormControls() { return this.myCustomValidation.controls;}

  onMyCustomValidationSubmit() {
    this.myCustomValidationSubmitted = true;

  }

  onDynamicFormSubmit() {
    console.log(this.dynamicForm.value);
  }

  addFavorite() {
    let hasEmptyValues: boolean = false;
    this.favorites.value.forEach((val: string) => {
        if (val === "") {
          alert('Please insert empty favorite field first')
          hasEmptyValues = true;
        }
    });
    // insert new element and set focus
    if (hasEmptyValues === false) {
       this.favorites.push(this.fb.control(''));
       console.log(this.favorites.value)
       const latest_index = this.favorites.length - 1;
       window.setTimeout(() => {
         const favoriteElements = this.el.nativeElement.querySelectorAll('[formArrayName="favorites"] input');
         favoriteElements[latest_index].focus();
       },100)
    }
  }

  deleteFavorite(id: number) {
    // don't delete when only 1 left
    // if (this.favorites.length > 1) {
      this.favorites.removeAt(id);
    // }
    /** its already managed on the view  by [disabled]*/
  }

  favoriteOnChange(e) {
    // on enter key, trigger addFavorite
    if (e.keyCode === 13) {
      this.addFavorite();
    }
  }

  formArrayHandler: any

  onAdd(values) {
    const fValues = Object.assign({type: this.fieldTypeAdd.value}, values)
    // console.log(this.fieldTypeAdd.value)
    console.log(fValues)
    this.fieldTypeAdd.reset('')
    
    if (fValues.key) {
      // this.addFormGroup.addControl(fValues.key, fValues.required ? this.fb.control('', Validators.required) : this.fb.control(''));
    }
    if (fValues.checkboxOption === 'multiple') {
      // fValues.groupCheckOptions.forEach(item => {
      //   console.log(item.key)
        
      //     this.addFormGroup.addControl(item.key, this.fb.control(''));
      // });
      const a = fValues.groupCheckOptions.map(item => {return item.key})
      console.log(a)
      this.addFormGroup.addControl(fValues.key, this.fb.array(a) )
      console.log(this.addFormGroup.controls)
      // this.formArrayHandler = this.addFormGroup.get(fValues.key) as FormArray;
      // this.fb.array([
      //   this.fb.control('')
      // ])
    }
    // console.log()
    // console.log(this.addFormGroup.value)
    this.addFormCollection.push(fValues);
  }

  addFormSubmit() {
    console.log(this.addFormGroup.value);
  }

  
  // toFormGroup(questions: QuestionBase<string>[] ) {
  //   const group: any = {};

  //   questions.forEach(question => {
  //     group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
  //                                             : new FormControl(question.value || '');
  //   });
  //   return new FormGroup(group);
  // }

}
// const newFavoriteText = Object.assign({}, this.favoriteDefaultTexts);