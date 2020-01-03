import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockEmployeeComponent } from './lock-employee.component';

describe('LockEmployeeComponent', () => {
  let component: LockEmployeeComponent;
  let fixture: ComponentFixture<LockEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
