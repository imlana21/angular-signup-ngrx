import { TestBed } from '@angular/core/testing';

import { ActiveFormGuard } from './active-form.guard';

describe('ActiveFormGuard', () => {
  let guard: ActiveFormGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActiveFormGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
