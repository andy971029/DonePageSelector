import { TestBed } from '@angular/core/testing';

import { DonePageSelectorService } from './done-page-selector.service';

describe('DonePageSelectorService', () => {
  let service: DonePageSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonePageSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
