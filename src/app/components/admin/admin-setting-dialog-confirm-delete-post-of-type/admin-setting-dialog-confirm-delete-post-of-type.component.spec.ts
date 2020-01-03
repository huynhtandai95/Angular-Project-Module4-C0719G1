import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSettingDialogConfirmDeletePostOfTypeComponent } from './admin-setting-dialog-confirm-delete-post-of-type.component';

describe('AdminSettingDialogConfirmDeletePostOfTypeComponent', () => {
  let component: AdminSettingDialogConfirmDeletePostOfTypeComponent;
  let fixture: ComponentFixture<AdminSettingDialogConfirmDeletePostOfTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSettingDialogConfirmDeletePostOfTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSettingDialogConfirmDeletePostOfTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
