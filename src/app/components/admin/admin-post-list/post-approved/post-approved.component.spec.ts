import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostApprovedComponent } from './post-approved.component';

describe('PostApprovedComponent', () => {
  let component: PostApprovedComponent;
  let fixture: ComponentFixture<PostApprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostApprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
