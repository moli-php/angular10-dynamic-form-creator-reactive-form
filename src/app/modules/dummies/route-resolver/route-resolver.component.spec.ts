import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteResolverComponent } from './route-resolver.component';

describe('RouteResolverComponent', () => {
  let component: RouteResolverComponent;
  let fixture: ComponentFixture<RouteResolverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteResolverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
