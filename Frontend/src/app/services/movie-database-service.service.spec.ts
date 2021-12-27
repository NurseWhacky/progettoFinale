import { TestBed } from '@angular/core/testing';

import { MovieDatabaseServiceService } from './movie-database-service.service';

describe('MovieDatabaseServiceService', () => {
  let service: MovieDatabaseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieDatabaseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
