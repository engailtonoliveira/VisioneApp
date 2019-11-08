import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUgbsPage } from './view-ugbs.page';

describe('ViewUgbsPage', () => {
  let component: ViewUgbsPage;
  let fixture: ComponentFixture<ViewUgbsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUgbsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUgbsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
