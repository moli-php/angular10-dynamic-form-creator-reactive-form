import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './basic/parent/parent.component';
import { ChildComponent } from './basic/child/child.component';

import { RouterModule } from '@angular/router';
import { ParentChildComponent } from './parent-child.component';
import { InteractParentComponent } from './interact/interact-parent/interact-parent.component';
import { InteractChildComponent } from './interact/interact-child/interact-child.component';
import { ListenChildComponent } from './listen/listen-child/listen-child.component';
import { ListenParentComponent } from './listen/listen-parent/listen-parent.component';


@NgModule({
  declarations: [ParentChildComponent, ParentComponent, ChildComponent, InteractParentComponent, InteractChildComponent, ListenChildComponent, ListenParentComponent ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ParentChildModule { }
