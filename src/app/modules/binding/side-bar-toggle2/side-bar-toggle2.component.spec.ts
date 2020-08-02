import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarToggle2Component } from './side-bar-toggle2.component';

describe('SideBarToggle2Component', () => {
  let component: SideBarToggle2Component;
  let fixture: ComponentFixture<SideBarToggle2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarToggle2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarToggle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
