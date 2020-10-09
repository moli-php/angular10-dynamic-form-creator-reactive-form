import { unescapeIdentifier } from '@angular/compiler';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray, 
   ValidationErrors, NgForm } from '@angular/forms';
import { min } from 'rxjs/operators';

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

  myForm = new FormGroup({
    title: new FormControl(''),
    name: new FormControl(''),
    address: new FormGroup({
      zip: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      street: new FormControl()
    }),
    gender: new FormControl()
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
  
  constructor(private fb: FormBuilder, private el: ElementRef) { 
    // const form = [
    //   {fav: [true, false, "green"]},
    //   {fav2: [false, "dog", "cat"]},
    // ];
    // const data = [
    //   {
    //     checkboxOption: "multiple",
    //     groupCheckOptions: [
    //       {label: "blue", key: "blue", value: "blue"},
    //       {label: "red", key: "red", value: "red"},
    //       {label: "green", key: "green", value: "green"},
    //     ],
    //     id: null,
    //     key: "fav",
    //     label: "fav",
    //     requried: null,
    //     type: "checkbox"
    //   },
    //   {
    //     checkboxOption: "multiple",
    //     groupCheckOptions: [
    //       {label: "fish", key: "fish", value: "fish"},
    //       {label: "dog", key: "dog", value: "dog"},
    //       {label: "cat", key: "cat", value: "cat"},
    //     ],
    //     id: null,
    //     key: "fav2",
    //     label: "fav2",
    //     requried: null,
    //     type: "checkbox"
    //   }
    // ]

  }

  ngOnInit(): void {
    let form = this.fb.group({});
    const fav1 = this.fb.array(["fish", false, true]);
    const fav2 = this.fb.array([true, true, false]);
    form.addControl('fav1', fav1);
    form.addControl('fav2', fav2);

    const data = [
      {
        checkboxOption: "multiple",
        groupCheckOptions: [
          {label: "blue", key: "blue", value: "blue"},
          {label: "red", key: "red", value: "red"},
          {label: "green", key: "green", value: "green"},
        ],
        id: null,
        key: "fav1",
        label: "fav1",
        requried: null,
        type: "checkbox"
      },
      {
        checkboxOption: "multiple",
        groupCheckOptions: [
          {label: "fish", key: "fish", value: "fish"},
          {label: "dog", key: "dog", value: "dog"},
          {label: "cat", key: "cat", value: "cat"},
        ],
        id: null,
        key: "fav2",
        label: "fav2",
        requried: null,
        type: "checkbox"
      }
    ]

    data.forEach((v,i) => {
      const a = form.get(v.key);
      const handler = [];
      a.value.map((mv,mi) => {
        if (mv) {
          //  a[mi] = v.groupCheckOptions[mi].value;
           handler.push(v.groupCheckOptions[mi].value)
        }
        
      })
      form.setControl(v.key, this.fb.array(handler))
      // console.log(handler)
      
    })
    console.log(form.value)

  
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
    console.log(this.myForm.value)
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



/*
checkboxOption: "multiple"
groupCheckOptions: (2) [{…}, {…}]
id: null
key: "fav"
label: "fav"
requried: null
type: "checkbox"

*/

  
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