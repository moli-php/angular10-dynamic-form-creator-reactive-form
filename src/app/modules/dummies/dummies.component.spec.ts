import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummiesComponent } from './dummies.component';

describe('DummiesComponent', () => {
  let component: DummiesComponent;
  let fixture: ComponentFixture<DummiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
