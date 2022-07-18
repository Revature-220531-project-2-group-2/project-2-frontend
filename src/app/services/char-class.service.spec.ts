import { TestBed } from '@angular/core/testing';

import { CharClassService } from './char-class.service';

describe('CharClassService', () => {
  let service: CharClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
