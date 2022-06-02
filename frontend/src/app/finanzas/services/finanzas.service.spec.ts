/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FinanzasService } from './finanzas.service';

describe('Service: Finanzas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinanzasService]
    });
  });

  it('should ...', inject([FinanzasService], (service: FinanzasService) => {
    expect(service).toBeTruthy();
  }));
});
