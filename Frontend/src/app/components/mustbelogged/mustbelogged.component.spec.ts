/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MustbeloggedComponent } from './mustbelogged.component';

describe('MustbeloggedComponent', () => {
  let component: MustbeloggedComponent;
  let fixture: ComponentFixture<MustbeloggedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MustbeloggedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MustbeloggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
