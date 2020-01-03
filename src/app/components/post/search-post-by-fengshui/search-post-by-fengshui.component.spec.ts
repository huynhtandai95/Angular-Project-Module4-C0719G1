import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPostByFengshuiComponent } from './search-post-by-fengshui.component';

describe('SearchPostByFengshuiComponent', () => {
  let component: SearchPostByFengshuiComponent;
  let fixture: ComponentFixture<SearchPostByFengshuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPostByFengshuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPostByFengshuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
