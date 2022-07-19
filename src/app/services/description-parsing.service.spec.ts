import { TestBed } from '@angular/core/testing';

import { DescriptionParsingService } from './description-parsing.service';

describe('DescriptionParsingService', () => {
  let service: DescriptionParsingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescriptionParsingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});