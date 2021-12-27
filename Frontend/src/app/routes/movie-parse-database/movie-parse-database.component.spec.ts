import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieParseDatabaseComponent } from './movie-parse-database.component';

describe('MovieParseDatabaseComponent', () => {
  let component: MovieParseDatabaseComponent;
  let fixture: ComponentFixture<MovieParseDatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieParseDatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieParseDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
