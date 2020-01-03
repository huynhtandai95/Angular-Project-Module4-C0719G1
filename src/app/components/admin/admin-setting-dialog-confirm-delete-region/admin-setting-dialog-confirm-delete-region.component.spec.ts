import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSettingDialogConfirmDeleteRegionComponent } from './admin-setting-dialog-confirm-delete-region.component';

describe('AdminSettingDialogConfirmDeleteRegionComponent', () => {
  let component: AdminSettingDialogConfirmDeleteRegionComponent;
  let fixture: ComponentFixture<AdminSettingDialogConfirmDeleteRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSettingDialogConfirmDeleteRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSettingDialogConfirmDeleteRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
