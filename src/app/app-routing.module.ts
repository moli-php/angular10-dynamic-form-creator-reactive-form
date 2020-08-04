import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { DefaultComponent } from './default/default.component';
import { ParentChildComponent } from './modules/parent-child/parent-child.component';
import { DashboardComponent } from './modules/heroes/dashboard/dashboard.component';
import { HeroesComponent } from './modules/heroes/heroes/heroes.component';
import { HeroComponent } from './modules/heroes/hero/hero.component';
import { BindingComponent } from './modules/binding/binding.component';

const ROUTES: Routes = [
    { path: '', component: DefaultComponent, pathMatch: 'full' },
    { path: 'parent-child', component: ParentChildComponent },
    { path: 'heroes-dashboard', component: DashboardComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroes/:id', component: HeroComponent },
    { path: 'lazy-load', loadChildren: () => import('./modules/lazy-load/lazy-load.module').then(m => m.LazyLoadModule) },
    { path: 'dummies', loadChildren: () => import('./modules/dummies/dummies.module').then(m => m.DummiesModule) },
    { path: 'binding', component: BindingComponent },
    { path: '**', redirectTo: ''}
];

//configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(ROUTES,{enableTracing: false})],
    exports: [RouterModule]
})
export class AppRoutingModule { }