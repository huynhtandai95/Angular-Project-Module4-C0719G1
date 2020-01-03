import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockEmployeeComponent } from './unlock-employee.component';

describe('UnlockEmployeeComponent', () => {
  let component: UnlockEmployeeComponent;
  let fixture: ComponentFixture<UnlockEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnlockEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnlockEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
