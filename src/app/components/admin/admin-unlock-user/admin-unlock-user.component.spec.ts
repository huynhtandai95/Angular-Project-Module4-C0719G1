import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUnlockUserComponent } from './admin-unlock-user.component';

describe('AdminUnlockUserComponent', () => {
  let component: AdminUnlockUserComponent;
  let fixture: ComponentFixture<AdminUnlockUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUnlockUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUnlockUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
