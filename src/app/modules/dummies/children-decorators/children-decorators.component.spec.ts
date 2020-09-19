import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenDecoratorsComponent } from './children-decorators.component';

describe('ChildrenDecoratorsComponent', () => {
  let component: ChildrenDecoratorsComponent;
  let fixture: ComponentFixture<ChildrenDecoratorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenDecoratorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenDecoratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
