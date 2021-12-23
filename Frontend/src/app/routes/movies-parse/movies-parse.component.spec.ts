import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesParseComponent } from './movies-parse.component';

describe('MoviesParseComponent', () => {
  let component: MoviesParseComponent;
  let fixture: ComponentFixture<MoviesParseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesParseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesParseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
