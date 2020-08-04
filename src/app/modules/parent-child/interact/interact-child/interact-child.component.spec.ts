import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractChildComponent } from './interact-child.component';

describe('InteractChildComponent', () => {
  let component: InteractChildComponent;
  let fixture: ComponentFixture<InteractChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
