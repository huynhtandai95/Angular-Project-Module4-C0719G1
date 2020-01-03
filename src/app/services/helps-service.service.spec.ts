import { TestBed } from '@angular/core/testing';

import { HelpsServiceService } from './helps-service.service';

describe('HelpsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HelpsServiceService = TestBed.get(HelpsServiceService);
    expect(service).toBeTruthy();
  });
});
