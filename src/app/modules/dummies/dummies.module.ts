import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../../auth/jwt.interceptor';
import { DummiesComponent } from './dummies/dummies.component';
import { ApiComponent } from './api/api.component';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [DummiesComponent, ApiComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ]
})
export class DummiesModule { }
