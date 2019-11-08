import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIndicatorPage } from './view-indicator.page';

describe('ViewIndicatorPage', () => {
  let component: ViewIndicatorPage;
  let fixture: ComponentFixture<ViewIndicatorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewIndicatorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIndicatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
