import { TestBed } from '@angular/core/testing';

import { SmartReaderService } from './smart-reader.service';

describe('SmartReaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmartReaderService = TestBed.get(SmartReaderService);
    expect(service).toBeTruthy();
  });
});
