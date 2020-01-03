import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSuccessComponent } from './post-success.component';

describe('PostSuccessComponent', () => {
  let component: PostSuccessComponent;
  let fixture: ComponentFixture<PostSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
