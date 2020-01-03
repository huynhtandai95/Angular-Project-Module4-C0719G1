import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPostGeneralComponent } from './search-post-general.component';

describe('SearchPostGeneralComponent', () => {
  let component: SearchPostGeneralComponent;
  let fixture: ComponentFixture<SearchPostGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPostGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPostGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
