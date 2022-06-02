import { TestBed } from '@angular/core/testing';

import { RivalService } from './rival.service';

describe('RivalService', () => {
  let service: RivalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RivalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
