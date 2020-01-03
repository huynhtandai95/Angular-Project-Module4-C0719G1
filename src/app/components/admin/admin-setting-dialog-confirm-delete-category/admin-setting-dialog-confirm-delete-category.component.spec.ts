import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSettingDialogConfirmDeleteCategoryComponent } from './admin-setting-dialog-confirm-delete-category.component';

describe('AdminSettingDialogConfirmDeleteCategoryComponent', () => {
  let component: AdminSettingDialogConfirmDeleteCategoryComponent;
  let fixture: ComponentFixture<AdminSettingDialogConfirmDeleteCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSettingDialogConfirmDeleteCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSettingDialogConfirmDeleteCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
