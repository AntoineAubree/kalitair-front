import { TestBed } from '@angular/core/testing';

import { DataIndicatorService } from './data-indicator.service';

describe('DataIndicatorServiceService', () => {
  let service: DataIndicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataIndicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
