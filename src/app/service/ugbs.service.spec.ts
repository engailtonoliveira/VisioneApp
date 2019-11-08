import { TestBed } from '@angular/core/testing';

import { UgbsService } from './ugbs.service';

describe('UgbsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UgbsService = TestBed.get(UgbsService);
    expect(service).toBeTruthy();
  });
});
