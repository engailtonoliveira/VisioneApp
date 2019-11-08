import { TestBed } from '@angular/core/testing';

import { CincoSService } from './cinco-s.service';

describe('CincoSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CincoSService = TestBed.get(CincoSService);
    expect(service).toBeTruthy();
  });
});
