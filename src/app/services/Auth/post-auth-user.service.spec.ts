import { TestBed } from '@angular/core/testing';

import { PostAuthUserService } from './post-auth-user.service';

describe('PostAuthUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostAuthUserService = TestBed.get(PostAuthUserService);
    expect(service).toBeTruthy();
  });
});
