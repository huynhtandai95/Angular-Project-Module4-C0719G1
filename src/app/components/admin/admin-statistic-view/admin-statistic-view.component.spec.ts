import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStatisticViewComponent } from './admin-statistic-view.component';

describe('AdminStatisticViewComponent', () => {
  let component: AdminStatisticViewComponent;
  let fixture: ComponentFixture<AdminStatisticViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminStatisticViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStatisticViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
