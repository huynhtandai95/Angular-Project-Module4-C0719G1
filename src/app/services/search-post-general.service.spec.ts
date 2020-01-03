import { TestBed } from '@angular/core/testing';

import { SearchPostAdvancedService } from './search-post-advanced.service';

describe('SearchPostGeneralService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchPostAdvancedService = TestBed.get(SearchPostAdvancedService);
    expect(service).toBeTruthy();
  });
});
