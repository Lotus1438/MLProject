import { TestBed } from '@angular/core/testing';

import { AccessTokenGuard } from './access-token.guard';

describe('AccessTokenGuard', () => {
  let guard: AccessTokenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccessTokenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
