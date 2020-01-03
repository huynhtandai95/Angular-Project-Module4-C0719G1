import { TestBed, async, inject } from '@angular/core/testing';

import { GuardsUserGuard } from './guards-user.guard';

describe('GuardsUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardsUserGuard]
    });
  });

  it('should ...', inject([GuardsUserGuard], (guard: GuardsUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
