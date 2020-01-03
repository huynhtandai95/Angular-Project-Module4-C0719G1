import { TestBed, async, inject } from '@angular/core/testing';

import { Level1AccountGuardGuard } from './level1-account-guard.guard';

describe('Level1AccountGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Level1AccountGuardGuard]
    });
  });

  it('should ...', inject([Level1AccountGuardGuard], (guard: Level1AccountGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
