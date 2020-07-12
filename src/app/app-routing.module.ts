import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { DefaultComponent } from './default/default.component';
import { ParentComponent } from './modules/parent-child/parent/parent.component';

const routes: Routes = [
    { path: '', component: DefaultComponent },
    { path: 'parent-child', component: ParentComponent },
];

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }