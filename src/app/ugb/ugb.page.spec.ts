import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UgbPage } from './ugb.page';

describe('UgbPage', () => {
  let component: UgbPage;
  let fixture: ComponentFixture<UgbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UgbPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UgbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
