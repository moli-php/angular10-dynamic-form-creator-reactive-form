import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

import { PlugInsRoutingModule } from './plug-ins-routing.module';
import { PlugInsComponent } from './plug-ins.component';
import { MultiselectDropdownComponent } from './multiselect-dropdown/multiselect-dropdown.component';


@NgModule({
  declarations: [PlugInsComponent, MultiselectDropdownComponent],
  imports: [
    CommonModule,
    PlugInsRoutingModule,
    MultiselectDropdownModule
  ],
  // exports: [MultiselectDropdownComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlugInsModule { }


/* Note
add CUSTOM_ELEMENTS_SCHEMA to fixed issue on ngModel on custom plugin directive 
eg <ss-multiselect-dropdown [(ngModel)]="modelName"></ss-multiselect-dropdown>
*/