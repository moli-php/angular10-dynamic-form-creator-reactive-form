import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray  } from '@angular/forms';

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
    })
  });
  myFormBuilder = this.fb.group({
    title: [''],
    name: [''],
    address: this.fb.group({
      street: [],
      zip: ['', Validators.required],
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
  // get favorites() {
  //   return this.dynamicForm.get('favorites') as FormArray;
  // }

  // this is same as above
  favorites = this.dynamicForm.get('favorites') as FormArray;
  
  constructor(private fb: FormBuilder, private el: ElementRef) { }

  ngOnInit(): void {
    this.title.valueChanges.subscribe(val => console.log(val))
    this.myForm.valueChanges.subscribe(val => console.log(val));
    this.dynamicForm.valueChanges.subscribe(val => console.log(val))
    // this.favorites.valueChanges.subscribe((val) => {
    //   console.log(val)
    // });
    // this.favorites.setControl(0, this.fb.control('mike'));
    // this.favorites.clear();
  }

  onFormSubmit() {
    console.warn(this.myForm.value);
    console.warn(this.myForm.valid);
    this.myForm.patchValue({
      title: 'new title',
      address: {
        street: 123
      }
    })
  }

  onForm2Submit() {
    console.warn(this.myFormBuilder.value);
    console.warn(this.myFormBuilder.valid);
    this.myFormBuilder.patchValue({
      title: 'new title',
      address: {
        street: 123
      }
    })
  }

  addFavorite() {
    let hasEmptyValues: boolean = false;
    this.favorites.value.forEach((val: string) => {
        if (val === "") {
          alert('Please insert empty favorite field first')
          hasEmptyValues = true;
        }
    });
    // insert new element and set foucs
    if (hasEmptyValues === false) {
       this.favorites.push(this.fb.control(''));
       const latest_index = this.favorites.length - 1;
       window.setTimeout(() => {
         const favoriteElements = this.el.nativeElement.querySelectorAll('[formArrayName="favorites"] input');
         favoriteElements[latest_index].focus();
       },100)
    }
  }

  deleteFavorite(id: number) {
    // don't delete when only 1 left
    if (this.favorites.length > 1) {
      this.favorites.removeAt(id);
    }
    /** its already managed on the view  by [disabled]*/
  }

  favoriteOnChange(e) {
    // on enter key, trigger addFavorite
    if (e.keyCode === 13) {
      this.addFavorite();
    }
    console.log(e.keyCode);
  }

}
