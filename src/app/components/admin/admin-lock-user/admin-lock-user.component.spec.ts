import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLockUserComponent } from './admin-lock-user.component';

describe('AdminLockUserComponent', () => {
  let component: AdminLockUserComponent;
  let fixture: ComponentFixture<AdminLockUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLockUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLockUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
