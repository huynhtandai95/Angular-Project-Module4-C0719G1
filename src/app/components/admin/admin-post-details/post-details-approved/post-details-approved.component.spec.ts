import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailsApprovedComponent } from './post-details-approved.component';

describe('PostDetailsApprovedComponent', () => {
  let component: PostDetailsApprovedComponent;
  let fixture: ComponentFixture<PostDetailsApprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDetailsApprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailsApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
