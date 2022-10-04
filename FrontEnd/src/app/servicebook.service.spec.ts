import { TestBed } from '@angular/core/testing';

import { ServicebookService } from './servicebook.service';

describe('ServicebookService', () => {
  let service: ServicebookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicebookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
