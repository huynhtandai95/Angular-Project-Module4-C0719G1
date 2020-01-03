import { TestBed, async, inject } from '@angular/core/testing';

import { Level2AccountGuard } from './level2-account.guard';

describe('Level2AccountGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Level2AccountGuard]
    });
  });

  it('should ...', inject([Level2AccountGuard], (guard: Level2AccountGuard) => {
    expect(guard).toBeTruthy();
  }));
});
