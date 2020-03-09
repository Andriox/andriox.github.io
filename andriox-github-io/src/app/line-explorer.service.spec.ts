import { TestBed } from '@angular/core/testing';

import { LineExplorerService } from './line-explorer.service';

describe('LineExplorerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LineExplorerService = TestBed.get(LineExplorerService);
    expect(service).toBeTruthy();
  });
});
