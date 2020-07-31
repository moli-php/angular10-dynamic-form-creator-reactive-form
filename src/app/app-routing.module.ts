import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { DefaultComponent } from './default/default.component';
import { ParentComponent } from './modules/parent-child/parent/parent.component';
import { DashboardComponent } from './modules/heroes/dashboard/dashboard.component';
import { HeroesComponent } from './modules/heroes/heroes/heroes.component';
import { HeroComponent } from './modules/heroes/hero/hero.component';
import { ApiComponent } from './modules/dummies/api/api.component';
import { DummiesComponent } from './modules/dummies/dummies/dummies.component';


const ROUTES: Routes = [
    { path: '', component: DefaultComponent, pathMatch: 'full' },
    { path: 'parent-child', component: ParentComponent },
    { path: 'heroes-dashboard', component: DashboardComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroes/:id', component: HeroComponent },
    { path: 'dummies', component: DummiesComponent},
    { path: 'api', component: ApiComponent},
    { path: 'lazy-load', loadChildren: () => import('./modules/lazy-load/lazy-load.module').then(m => m.LazyLoadModule) },
    { path: '**', redirectTo: ''}
];

//configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(ROUTES,{enableTracing: false})],
    exports: [RouterModule]
})
export class AppRoutingModule { }