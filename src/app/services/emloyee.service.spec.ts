import { TestBed } from '@angular/core/testing';

import { EmloyeeService } from './emloyee.service';

describe('EmloyeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmloyeeService = TestBed.get(EmloyeeService);
    expect(service).toBeTruthy();
  });
});
