import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSettingDialogEditPostOfTypeComponent } from './admin-setting-dialog-edit-post-of-type.component';

describe('AdminSettingDialogEditPostOfTypeComponent', () => {
  let component: AdminSettingDialogEditPostOfTypeComponent;
  let fixture: ComponentFixture<AdminSettingDialogEditPostOfTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSettingDialogEditPostOfTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSettingDialogEditPostOfTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
