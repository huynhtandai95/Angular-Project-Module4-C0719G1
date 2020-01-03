import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailsPendingApprovalComponent } from './post-details-pending-approval.component';

describe('PostDetailsPendingApprovalComponent', () => {
  let component: PostDetailsPendingApprovalComponent;
  let fixture: ComponentFixture<PostDetailsPendingApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDetailsPendingApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailsPendingApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
