import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSettingDialogEditRegionComponent } from './admin-setting-dialog-edit-region.component';

describe('AdminSettingDialogEditRegionComponent', () => {
  let component: AdminSettingDialogEditRegionComponent;
  let fixture: ComponentFixture<AdminSettingDialogEditRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSettingDialogEditRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSettingDialogEditRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
