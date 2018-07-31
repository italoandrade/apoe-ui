import { TestBed, inject } from '@angular/core/testing';

import { ApoeService } from './apoe.service';

describe('ApoeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApoeService]
    });
  });

  it('should be created', inject([ApoeService], (service: ApoeService) => {
    expect(service).toBeTruthy();
  }));
});
