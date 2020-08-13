import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../../auth/jwt.interceptor';
import { DummiesComponent } from './dummies.component';
import { ApiComponent } from './api/api.component';
import { LoginComponent } from './login/login.component';
import { SecretComponent } from './secret/secret.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from '../../service/auth.service';
import { AuthGuard } from '../../service/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { DirectiveComponent } from './directive/directive.component';
import { MyHighlightDirective } from './directive/my-highlight.directive';
import { DummiesRoutingModule } from './dummies-routing.module';
import { SearchDbComponent } from './search-db/search-db.component';
import { FormComponent } from './form/form.component';
import { HttpRxjsComponent } from './http-rxjs/http-rxjs.component';



@NgModule({
  declarations: [
    DummiesComponent,
    ApiComponent, 
    LoginComponent, 
    SecretComponent, 
    AdminComponent, 
    DirectiveComponent, 
    MyHighlightDirective, 
    SearchDbComponent, 
    FormComponent, 
    HttpRxjsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    DummiesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ]
})
export class DummiesModule { }
