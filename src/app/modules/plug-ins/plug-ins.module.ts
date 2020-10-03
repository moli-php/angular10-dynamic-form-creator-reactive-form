import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlugInsRoutingModule } from './plug-ins-routing.module';
import { PlugInsComponent } from './plug-ins.component';


@NgModule({
  declarations: [PlugInsComponent],
  imports: [
    CommonModule,
    PlugInsRoutingModule,
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlugInsModule { }


/* Note
add CUSTOM_ELEMENTS_SCHEMA to fixed issue on ngModel on custom plugin directive 
eg <ss-multiselect-dropdown [(ngModel)]="modelName"></ss-multiselect-dropdown>
*/