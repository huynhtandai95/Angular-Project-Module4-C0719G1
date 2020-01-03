import { TestBed } from '@angular/core/testing';

import { StatusOfPostService } from './status-of-post.service';

describe('StatusOfPostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatusOfPostService = TestBed.get(StatusOfPostService);
    expect(service).toBeTruthy();
  });
});
