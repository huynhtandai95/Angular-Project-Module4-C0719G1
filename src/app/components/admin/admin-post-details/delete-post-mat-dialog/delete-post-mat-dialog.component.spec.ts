import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePostMatDialogComponent } from './delete-post-mat-dialog.component';

describe('DeletePostMatDialogComponent', () => {
  let component: DeletePostMatDialogComponent;
  let fixture: ComponentFixture<DeletePostMatDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePostMatDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePostMatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
