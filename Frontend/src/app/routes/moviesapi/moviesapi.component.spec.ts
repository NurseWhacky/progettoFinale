import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesapiComponent } from './moviesapi.component';

describe('MoviesapiComponent', () => {
  let component: MoviesapiComponent;
  let fixture: ComponentFixture<MoviesapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
