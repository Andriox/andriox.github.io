import { TestBed } from '@angular/core/testing';

import { ContentReaderService } from './content-reader.service';

describe('ContentReaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContentReaderService = TestBed.get(ContentReaderService);
    expect(service).toBeTruthy();
  });
});
