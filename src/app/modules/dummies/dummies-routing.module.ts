import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../service/auth.guard';
import { AuthAdminGuard} from '../../service/auth-admin.guard';
import { DummiesComponent } from './dummies.component';
import { AdminComponent } from './admin/admin.component';
import { ApiComponent } from './api/api.component';
import { DirectiveComponent } from './directive/directive.component';
import { LoginComponent } from './login/login.component';
import { SecretComponent } from './secret/secret.component';

const routes: Routes = [
  { path: '', component: DummiesComponent },
  { path: 'api', component: ApiComponent},
  { path: 'directive', component: DirectiveComponent},
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AuthAdminGuard]},
  { path: 'secret', component: SecretComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DummiesRoutingModule { }
