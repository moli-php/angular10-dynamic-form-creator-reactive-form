import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicBindingChildComponent } from './basic-binding-child.component';

describe('BasicBindingChildComponent', () => {
  let component: BasicBindingChildComponent;
  let fixture: ComponentFixture<BasicBindingChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicBindingChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicBindingChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
