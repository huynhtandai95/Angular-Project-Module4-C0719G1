import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMostViewPostComponent } from './admin-most-view-post.component';

describe('AdminMostViewPostComponent', () => {
  let component: AdminMostViewPostComponent;
  let fixture: ComponentFixture<AdminMostViewPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMostViewPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMostViewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
