import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarToggle3Component } from './side-bar-toggle3.component';

describe('SideBarToggle3Component', () => {
  let component: SideBarToggle3Component;
  let fixture: ComponentFixture<SideBarToggle3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarToggle3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarToggle3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
