import { TestBed, async, inject } from '@angular/core/testing';

import { Level4AccountGuard } from './level4-account.guard';

describe('Level4AccountGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Level4AccountGuard]
    });
  });

  it('should ...', inject([Level4AccountGuard], (guard: Level4AccountGuard) => {
    expect(guard).toBeTruthy();
  }));
});
