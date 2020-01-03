import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpSuccessComponent } from './help-success.component';

describe('HelpSuccessComponent', () => {
  let component: HelpSuccessComponent;
  let fixture: ComponentFixture<HelpSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
