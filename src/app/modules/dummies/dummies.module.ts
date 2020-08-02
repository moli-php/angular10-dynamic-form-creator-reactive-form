import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../../auth/jwt.interceptor';
import { DummiesComponent } from './dummies/dummies.component';
import { ApiComponent } from './api/api.component';
import { LoginComponent } from './login/login.component';
import { SecretComponent } from './secret/secret.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { AuthGuard } from '../../service/auth.guard';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [DummiesComponent, ApiComponent, LoginComponent, SecretComponent, AdminComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule
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
