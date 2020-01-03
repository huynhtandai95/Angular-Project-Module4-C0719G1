import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovePostMatDialogComponent } from './remove-post-mat-dialog.component';

describe('RemovePostMatDialogComponent', () => {
  let component: RemovePostMatDialogComponent;
  let fixture: ComponentFixture<RemovePostMatDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovePostMatDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovePostMatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
