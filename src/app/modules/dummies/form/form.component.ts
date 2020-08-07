import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray  } from '@angular/forms';
import { Observable } from 'rxjs';

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
  get favorites() {
    return this.dynamicForm.get('favorites') as FormArray;
  }
  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.title.valueChanges.subscribe(val => console.log(val))
    this.myForm.valueChanges.subscribe(val => console.log(val));
    this.dynamicForm.valueChanges.subscribe(val => console.log(val))
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
    if (hasEmptyValues === false) {
      this.favorites.push(this.fb.control(''));
    }
  }

  deleteFavorite(id: number) {
    // don't delete when only 1 left
    if (this.favorites.length > 1) {
      this.favorites.removeAt(id);
    }

    /** its already managed on the view  by [disabled]*/
   
  }




}
