import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPostByTitleComponent } from './search-post-by-title.component';

describe('SearchPostByTitleComponent', () => {
  let component: SearchPostByTitleComponent;
  let fixture: ComponentFixture<SearchPostByTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPostByTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPostByTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
