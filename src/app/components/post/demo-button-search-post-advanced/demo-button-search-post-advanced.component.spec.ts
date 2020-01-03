import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoButtonSearchPostAdvancedComponent } from './demo-button-search-post-advanced.component';

describe('DemoButtonSearchPostAdvancedComponent', () => {
  let component: DemoButtonSearchPostAdvancedComponent;
  let fixture: ComponentFixture<DemoButtonSearchPostAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoButtonSearchPostAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoButtonSearchPostAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
