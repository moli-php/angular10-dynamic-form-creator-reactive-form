import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ParentComponent, ChildComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ParentChildModule { }
