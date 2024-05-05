import { TestBed } from '@angular/core/testing';

import { PlayerDetailService } from './player-detail.service';

describe('PlayerDetailService', () => {
  let service: PlayerDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
