import { TestBed } from '@angular/core/testing';

import { UseritiumService } from './useritium.service';

describe('UseritiumService', () => {
  let service: UseritiumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseritiumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
