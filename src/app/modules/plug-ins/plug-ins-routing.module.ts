import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlugInsComponent } from './plug-ins.component';
// import { MultiselectDropdownComponent } from './multiselect-dropdown/multiselect-dropdown.component';

const routes: Routes = [
  { path: '', component: PlugInsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlugInsRoutingModule { }
