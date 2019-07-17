import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonLayoutComponent } from './non-layout.component';

describe('NonLayoutComponent', () => {
  let component: NonLayoutComponent;
  let fixture: ComponentFixture<NonLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
