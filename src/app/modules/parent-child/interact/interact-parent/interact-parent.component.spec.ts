import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractParentComponent } from './interact-parent.component';

describe('InteractParentComponent', () => {
  let component: InteractParentComponent;
  let fixture: ComponentFixture<InteractParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
