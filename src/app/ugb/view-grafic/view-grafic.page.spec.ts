import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGraficPage } from './view-grafic.page';

describe('ViewGraficPage', () => {
  let component: ViewGraficPage;
  let fixture: ComponentFixture<ViewGraficPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGraficPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGraficPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
