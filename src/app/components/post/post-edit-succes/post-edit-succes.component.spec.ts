import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEditSuccesComponent } from './post-edit-succes.component';

describe('PostEditSuccesComponent', () => {
  let component: PostEditSuccesComponent;
  let fixture: ComponentFixture<PostEditSuccesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostEditSuccesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEditSuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
