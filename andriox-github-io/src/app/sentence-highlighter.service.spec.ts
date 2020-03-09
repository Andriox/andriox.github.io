import { TestBed } from '@angular/core/testing';

import { SentenceHighlighterService } from './sentence-highlighter.service';

describe('SentenceHighlighterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SentenceHighlighterService = TestBed.get(SentenceHighlighterService);
    expect(service).toBeTruthy();
  });
});
