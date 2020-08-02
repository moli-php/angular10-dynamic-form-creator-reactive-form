import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretComponent } from './secret.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../../../auth/jwt.interceptor';
// import { DummiesComponent } from './dummies/dummies.component';
// import { ApiComponent } from './api/api.component';
// import { LoginComponent } from './login/login.component';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../service/auth.service';
import { AuthGuard } from '../../../service/auth.guard';
// import { AdminComponent } from './admin/admin.component';

describe('SecretComponent', () => {
  let component: SecretComponent;
  let fixture: ComponentFixture<SecretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        FormsModule
      ],
      providers: [
        AuthService,
        AuthGuard,
        Router,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: JwtInterceptor,
          multi: true
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
