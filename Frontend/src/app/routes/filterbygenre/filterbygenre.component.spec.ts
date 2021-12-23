import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterbygenreComponent } from './filterbygenre.component';

describe('FilterbygenreComponent', () => {
  let component: FilterbygenreComponent;
  let fixture: ComponentFixture<FilterbygenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterbygenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterbygenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
