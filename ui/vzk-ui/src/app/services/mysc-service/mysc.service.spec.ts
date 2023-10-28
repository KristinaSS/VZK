import { TestBed } from '@angular/core/testing';

import { MyscService } from './mysc.service';

describe('MyscService', () => {
  let service: MyscService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyscService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
