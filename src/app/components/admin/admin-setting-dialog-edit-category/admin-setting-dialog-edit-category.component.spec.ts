import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSettingDialogEditCategoryComponent } from './admin-setting-dialog-edit-category.component';

describe('AdminSettingDialogEditCategoryComponent', () => {
  let component: AdminSettingDialogEditCategoryComponent;
  let fixture: ComponentFixture<AdminSettingDialogEditCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSettingDialogEditCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSettingDialogEditCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
