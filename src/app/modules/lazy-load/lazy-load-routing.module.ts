import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyLoadComponent } from './lazy-load.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  { path: '', component: LazyLoadComponent },
  { path: 'sample', component: SampleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadRoutingModule { }
