import { TestBed } from '@angular/core/testing';

import { DotnetServiceService } from './dotnet-service.service';

describe('DotnetServiceService', () => {
  let service: DotnetServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DotnetServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
