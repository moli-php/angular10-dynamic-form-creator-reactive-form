import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenParentComponent } from './listen-parent.component';

describe('ListenParentComponent', () => {
  let component: ListenParentComponent;
  let fixture: ComponentFixture<ListenParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListenParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
