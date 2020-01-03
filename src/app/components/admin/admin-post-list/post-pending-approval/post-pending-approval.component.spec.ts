import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPendingApprovalComponent } from './post-pending-approval.component';

describe('PostPendingApprovalComponent', () => {
  let component: PostPendingApprovalComponent;
  let fixture: ComponentFixture<PostPendingApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostPendingApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPendingApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
