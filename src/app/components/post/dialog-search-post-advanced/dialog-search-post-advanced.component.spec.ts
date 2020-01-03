import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSearchPostAdvancedComponent } from './dialog-search-post-advanced.component';

describe('DialogSearchPostAdvancedComponent', () => {
  let component: DialogSearchPostAdvancedComponent;
  let fixture: ComponentFixture<DialogSearchPostAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSearchPostAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSearchPostAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
