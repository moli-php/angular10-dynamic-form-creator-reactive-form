import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BindingComponent } from './binding.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideBarToggleComponent } from './side-bar-toggle/side-bar-toggle.component';
import { SideBar2Component } from './side-bar2/side-bar2.component';
import { SideBarToggle2Component } from './side-bar-toggle2/side-bar-toggle2.component';
import { SideBarToggle3Component } from './side-bar-toggle3/side-bar-toggle3.component';
import { SideBar3Component } from './side-bar3/side-bar3.component';
import { RouterModule } from '@angular/router';
import { BasicBindingComponent } from './basic-binding/basic-binding.component';
import { BasicBindingChildComponent } from './basic-binding-child/basic-binding-child.component';


@NgModule({
  declarations: [BindingComponent, SideBarComponent, SideBarToggleComponent, SideBar2Component, SideBarToggle2Component, SideBarToggle3Component, SideBar3Component, BasicBindingComponent, BasicBindingChildComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class BindingModule { }
