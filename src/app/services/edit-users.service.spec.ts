import { TestBed } from '@angular/core/testing';

import { EditUsersService } from './edit-users.service';

describe('EditUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditUsersService = TestBed.get(EditUsersService);
    expect(service).toBeTruthy();
  });
});
