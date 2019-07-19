import { TestBed, async, inject } from '@angular/core/testing';

import { SsoGuard } from './sso.guard';

describe('SsoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SsoGuard]
    });
  });

  it('should ...', inject([SsoGuard], (guard: SsoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
