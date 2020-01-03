import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessComfirmMailComponent } from './success-comfirm-mail.component';

describe('SuccessComfirmMailComponent', () => {
  let component: SuccessComfirmMailComponent;
  let fixture: ComponentFixture<SuccessComfirmMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessComfirmMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessComfirmMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
