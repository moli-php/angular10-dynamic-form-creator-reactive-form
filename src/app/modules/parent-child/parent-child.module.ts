import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';



@NgModule({
  declarations: [ParentComponent],
  imports: [
    CommonModule
  ]
})
export class ParentChildModule { }
