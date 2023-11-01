import { TestBed } from '@angular/core/testing';

import { MiscService } from './misc.service';

describe('MyscService', () => {
  let service: MiscService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiscService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
